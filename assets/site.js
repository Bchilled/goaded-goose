// The Goaded Goose — storefront template behaviour (front-end only).
(function () {
  var PRODUCTS = window.GG_PRODUCTS || [];

  function byId(id) { return document.getElementById(id); }

  function getCart() {
    try { return parseInt(localStorage.getItem("gg-cart") || "0", 10) || 0; }
    catch (e) { return 0; }
  }
  function setCart(n) {
    try { localStorage.setItem("gg-cart", String(n)); } catch (e) {}
    document.querySelectorAll(".cart-count").forEach(function (el) { el.textContent = n; });
  }
  setCart(getCart());

  function colorLabel(c) {
    return { W: "White", U: "Blue", B: "Black", R: "Red", G: "Green", C: "Colourless" }[c] || c;
  }

  function variantLine(v) {
    return v.condition + " / " + v.language + " / " + v.finish;
  }

  function cardHTML(p) {
    var lines = p.variants.map(function (v) {
      return '<li class="' + (v.stock ? "" : "oos") + '">- ' + variantLine(v) + "</li>";
    }).join("");
    return (
      '<article class="card">' +
      '<a href="product.html?id=' + p.id + '"><div class="card-art">' +
      '<div class="setcode">' + p.setCode + "</div>" +
      '<div class="artname">' + p.name + "</div>" +
      '<div class="arttype">' + p.type + "</div>" +
      "</div></a>" +
      '<a class="card-name" href="product.html?id=' + p.id + '">' + p.name + "</a>" +
      '<div class="card-setline">' + p.setCode + " - " + p.number + "</div>" +
      '<ul class="variant-lines">' + lines + "</ul>" +
      '<div class="price"><span class="dash">—</span></div>' +
      "</article>"
    );
  }

  // ---------- Homepage ----------
  var newest = byId("newest-grid");
  if (newest) {
    newest.innerHTML = PRODUCTS.slice(0, 8).map(cardHTML).join("");
  }
  var featured = byId("featured-block");
  if (featured && PRODUCTS.length) {
    var p = PRODUCTS[2]; // Sol Ring sample feature
    featured.innerHTML =
      '<div class="card-art"><div class="setcode">' + p.setCode + '</div>' +
      '<div class="artname">' + p.name + '</div><div class="arttype">' + p.type + "</div></div>" +
      "<div><h3>" + p.name + "</h3>" +
      '<p class="card-setline">' + p.setName + " &middot; " + p.setCode + " - " + p.number + "</p>" +
      '<p class="price"><span class="dash">—</span></p>' +
      '<a class="btn" href="product.html?id=' + p.id + '">View product</a></div>';
  }

  // ---------- Collection page ----------
  var grid = byId("collection-grid");
  if (grid) {
    var params = new URLSearchParams(location.search);
    var q = (params.get("q") || "").toLowerCase();
    var searchInput = byId("filter-search");
    if (searchInput && q) searchInput.value = q;

    function checkedValues(name) {
      return Array.prototype.map.call(
        document.querySelectorAll('input[data-filter="' + name + '"]:checked'),
        function (el) { return el.value; }
      );
    }

    function apply() {
      var sets = checkedValues("set");
      var colors = checkedValues("color");
      var rarities = checkedValues("rarity");
      var conditions = checkedValues("condition");
      var finishes = checkedValues("finish");
      var query = searchInput ? searchInput.value.toLowerCase().trim() : q;

      var list = PRODUCTS.filter(function (p) {
        if (query && p.name.toLowerCase().indexOf(query) === -1) return false;
        if (sets.length && sets.indexOf(p.setCode) === -1) return false;
        if (colors.length && !p.colors.some(function (c) { return colors.indexOf(c) !== -1; })) return false;
        if (rarities.length && rarities.indexOf(p.rarity) === -1) return false;
        if (conditions.length && !p.variants.some(function (v) { return conditions.indexOf(v.condition) !== -1; })) return false;
        if (finishes.length && !p.variants.some(function (v) { return finishes.indexOf(v.finish) !== -1; })) return false;
        return true;
      });

      var sort = byId("sort-select").value;
      list.sort(function (a, b) {
        if (sort === "name-az") return a.name.localeCompare(b.name);
        if (sort === "name-za") return b.name.localeCompare(a.name);
        if (sort === "set") return (a.setCode + a.number).localeCompare(b.setCode + b.number);
        return 0;
      });

      grid.innerHTML = list.length
        ? list.map(cardHTML).join("")
        : '<div class="empty-note">No sample products match those filters.</div>';
      document.querySelectorAll(".js-count").forEach(function (el) {
        el.textContent = list.length + " products";
      });
    }

    document.querySelectorAll(".filters input").forEach(function (el) {
      el.addEventListener("change", apply);
    });
    if (searchInput) searchInput.addEventListener("input", apply);
    byId("sort-select").addEventListener("change", apply);
    apply();
  }

  // ---------- Product page ----------
  var productRoot = byId("product-root");
  if (productRoot) {
    var pid = new URLSearchParams(location.search).get("id");
    var prod = PRODUCTS.filter(function (p) { return p.id === pid; })[0] || PRODUCTS[0];
    document.title = prod.name + " [" + prod.setCode + " - " + prod.number + "] | The Goaded Goose";

    var variantOptions = prod.variants.map(function (v, i) {
      return '<option value="' + i + '"' + (v.stock ? "" : " disabled") + ">" +
        variantLine(v) + (v.stock ? "" : " — Out of stock") + "</option>";
    }).join("");

    productRoot.innerHTML =
      '<div class="breadcrumb"><a href="index.html">Home</a> / ' +
      '<a href="collection.html">Magic: The Gathering Singles</a> / ' + prod.name + "</div>" +
      '<div class="product-layout">' +
      '<div class="product-art"><div class="setcode">' + prod.setCode + '</div>' +
      '<div class="artname" style="font-size:1.3rem;font-weight:700">' + prod.name + "</div>" +
      '<div class="arttype" style="color:var(--muted)">' + prod.type + "</div></div>" +
      '<div class="buy-panel"><h1>' + prod.name + " [" + prod.setCode + " - " + prod.number + "]</h1>" +
      '<div class="setline">' + prod.setName + "</div>" +
      '<div class="price" style="font-size:1.4rem"><span class="dash">—</span></div>' +
      '<label for="variant-select">Condition / Language / Finish</label>' +
      '<select id="variant-select">' + variantOptions + "</select>" +
      '<div class="buy-row"><div><label for="qty">Quantity</label>' +
      '<input type="number" id="qty" value="1" min="1" style="width:80px"></div>' +
      '<button class="btn" id="add-cart" type="button">Add to cart</button></div>' +
      '<div class="stock-note" id="stock-note"></div>' +
      '<div class="share-row">Share this product: <a href="#">Link</a><a href="#">Email</a></div>' +
      "</div></div>" +
      '<div class="detail-block"><h2>Description</h2><ul>' +
      "<li><b>Rarity:</b> " + prod.rarity + "</li>" +
      "<li><b>#:</b> " + prod.number + "</li>" +
      "<li><b>Type:</b> " + prod.type + "</li>" +
      "<li><b>Colour:</b> " + prod.colors.map(colorLabel).join(", ") + "</li>" +
      "<li><b>Rules Text:</b> " + prod.rules + "</li>" +
      "</ul></div>" +
      '<div class="detail-block"><h2>Payment &amp; Security</h2>' +
      "<p>Your payment information is processed securely. Card details are never stored on this site.</p></div>";

    var related = PRODUCTS.filter(function (p) {
      return p.id !== prod.id && (p.setCode === prod.setCode || p.colors.some(function (c) { return prod.colors.indexOf(c) !== -1; }));
    }).slice(0, 4);
    var rel = byId("related-grid");
    if (rel) rel.innerHTML = related.map(cardHTML).join("");

    var sel = byId("variant-select");
    var note = byId("stock-note");
    function stockNote() {
      var v = prod.variants[parseInt(sel.value, 10)];
      note.textContent = v && v.stock ? "Availability: In stock" : "Availability: Out of stock";
    }
    sel.addEventListener("change", stockNote);
    stockNote();

    byId("add-cart").addEventListener("click", function () {
      var qty = parseInt(byId("qty").value, 10) || 1;
      setCart(getCart() + qty);
      this.textContent = "Added to cart";
      var btn = this;
      setTimeout(function () { btn.textContent = "Add to cart"; }, 1400);
    });
  }

  // ---------- Header search ----------
  document.querySelectorAll(".search-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = form.querySelector("input").value.trim();
      location.href = "collection.html" + (v ? "?q=" + encodeURIComponent(v) : "");
    });
  });
})();
