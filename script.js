// Datos de productos
        let products = [
            {
                id: 1,
                name: "Singani San Pedro",
                category: "singani",
                price: 280,
                stock: 15,
                description: "Singani San Pedro sabor y esencia especial.",
                image: "https://latinarepublic.com/wp-content/uploads/2024/12/singani-1024x1024.jpg",
                badge: "new"
            },
            {
                id: 2,
                name: "Combo Singani Casa Real Rojo",
                category: "combos",
                price: 200,
                stock: 8,
                description: "Perfecto para una noche especial.",
                image: "https://rebajame.com/wp-content/uploads/2020/05/singani-casa-real-etiqueta-roja-750ml.jpg",
                badge: "promo"
            },
            {
                id: 3,
                name: "Whisky Johnnie Walker Black Label",
                category: "whiskys",
                price: 420,
                stock: 0,
                description: "Whisky escocés blend con sabor intenso y complejo. Mezcla de maltas single de las principales regiones de Escocia.",
                image: "https://tse4.mm.bing.net/th/id/OIP.0YZYiIYNI5MZsIxnxBqTuQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                badge: "soldout"
            },
            {
                id: 4,
                name: "Vodka Absolut",
                category: "vodkas",
                price: 180,
                stock: 12,
                description: "Vodka sueco premium, destilado de grano de invierno. Notas ricas con un carácter suave y un acabado aterciopelado.",
                image: "https://th.bing.com/th/id/R.2589c1b1c1b6ebd2ddfab903da7a38af?rik=Q4P%2fPBxCgNX4JA&riu=http%3a%2f%2ftheboogaloobali.com%2fwp-content%2fuploads%2fabsolut.jpg&ehk=EBcgfEc%2fSRaqHpKML0Wa5tRKjOG5MD54d2WoUEsTuCU%3d&risl=&pid=ImgRaw&r=0",
                badge: null
            },
            {
                id: 5,
                name: "Combo Ron Abuelo",
                category: "combos",
                price: 250,
                stock: 5,
                description: "Todo lo necesario para una fiesta inolvidable.",
                image: "https://tse3.mm.bing.net/th/id/OIP.ihElzw4L_iCnEgz_AY1KMgHaHV?rs=1&pid=ImgDetMain&o=7&rm=3",
                badge: "promo"
            },
            {
                id: 6,
                name: "Singani Parrales",
                category: "singani",
                price: 380,
                stock: 3,
                description: "Un perfil de sabor distintivo y refrescante.",
                image: "https://i.pinimg.com/736x/f3/bc/f9/f3bcf994d41709986e0d1a9d93c5cc59--new-work-work-on.jpg",
                badge: null
            },
            {
                id: 7,
                name: "Whisky Jack Daniel's",
                category: "whiskys",
                price: 320,
                stock: 7,
                description: "Whisky Tennessee suave con carácter. Filtrado a través de carbón de arce azucarero para suavidad.",
                image: "https://tse2.mm.bing.net/th/id/OIP.SnxFzC0Jsfb5XDop1UJZewHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                badge: null
            },
            {
                id: 8,
                name: "Combo Whisky & Coca-Cola",
                category: "combos",
                price: 380,
                stock: 6,
                description: "Whisky Jack Daniel's + 2 Coca-Cola + Hielo + Vasos. El combo clásico para disfrutar en cualquier ocasión.",
                image: "https://thumbs.dreamstime.com/b/riga-latvia-february-photo-coca-cola-plastic-bottle-jack-daniel-whiskey-isolated-white-background-clipping-path-241283588.jpg",
                badge: "new"
            },
            {
                id: 9,
                name: "Ron Havana Club 3 Años",
                category: "ron",
                price: 240,
                stock: 10,
                description: "Ron cubano, sabor suave y notas de caramelo.",
                image: "https://tse3.mm.bing.net/th/id/OIP.n4MGFFt22cujFnQ-D8K7MAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                badge: null
            },
            {
                id: 10,
                name: "Vino Tinto Malbec 750ml",
                category: "vinos",
                price: 160,
                stock: 9,
                description: "Vino Malbec con cuerpo, perfecto para carnes.",
                image: "https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dw57819969/images/36949312/large/36949312_x1.jpg",
                badge: null
            },
            {
                id: 11,
                name: "Cerveza Paceña 330ml",
                category: "cervezas",
                price: 12,
                stock: 50,
                description: "Cerveza rubia, refrescante y ligera.",
                image: "https://amarket.com.bo/cdn/shop/files/7772116030129_700x700.jpg?v=1719864261",
                badge: null
            },
            {
                id: 12,
                name: "Tequila José Cuervo",
                category: "tequilas",
                price: 300,
                stock: 6,
                description: "Tequila 100% agave para shots y cocteles.",
                image: "https://i.pinimg.com/736x/5e/e7/64/5ee764763a176fd9c3d74f7b24653a84.jpg",
                badge: null
            },
            {
                id: 13,
                name: "Gaseosa Coca-Cola 2L",
                category: "gaseosas",
                price: 18,
                stock: 25,
                description: "Refresco clásico en botella de 2 litros.",
                image: "https://tse1.mm.bing.net/th/id/OIP.gFMV8hmbdmZ-6UGjLcDBmwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
                badge: null
            },
            {
                id: 14,
                name: "Lixs",
                category: "bebidas_preparadas",
                price: 10,
                stock: 40,
                description: "Bebida preparada sabor cítrico para recargar energía.",
                image: "https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/365567241_9786395324768519_2982957842401732904_n.png?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=QAZChv4mPvwQ7kNvwHEoexk&_nc_oc=AdnnL5lRo9nAA_Y0I4nB84-jxc3fC4xiEf3BJc9XHCmfGdEI0cvbmuiFEFMh2J2UmVpeVNk49XEXievBbSh1kL9U&_nc_zt=23&_nc_ht=scontent.flpb1-1.fna&_nc_gid=gI_VDLBkbGcDjrFoGD1XlQ&oh=00_Afe3pPOS8me5w0nELbNBOHv4obuffGtFRnMGyiKIPNaJ4A&oe=69081DB1",
                badge: null
            },
            {
                id: 15,
                name: "Cigarrillos L&M",
                category: "cigarrillos",
                price: 35,
                stock: 30,
                description: "Venta responsable de cigarrillos. Verifica edad del comprador.",
                image: "https://tse1.mm.bing.net/th/id/OIP.y1JD8TioIeZH20-3jgQonQHaIJ?rs=1&pid=ImgDetMain&o=7&rm=3",
                badge: null
            },
            {
                id: 16,
                name: "Dr Picks",
                category: "snacks",
                price: 8,
                stock: 60,
                description: "Crujientes en paquete individual.",
                image: "https://icnorteb2c.vteximg.com.br/arquivos/ids/156031-1000-1000/Pickesos-Dr-Picks-200-Gr-1-461.jpg?v=637345691746730000",
                badge: null
            }

        ];

        // Intentar cargar productos guardados del localStorage antes de todo
const savedProducts = localStorage.getItem('Products');
if (savedProducts) {
    products = JSON.parse(savedProducts);
}

        // Carrito de compras
        let cart = [];
        let currentUser = null;
        let editingProductId = null;
        let currentAdmin = null;
        let purchaseHistory = [];
        

        // Elementos del DOM
        const productGrid = document.getElementById('productGrid');
        const cartSidebar = document.getElementById('cartSidebar');
        const cartItems = document.getElementById('cartItems');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const closeCartBtn = document.getElementById('closeCartBtn');
        const cartBtn = document.getElementById('cartBtn');
        const clearCartBtn = document.getElementById('clearCartBtn');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchBox = document.getElementById('searchBox');
        const adminPanel = document.getElementById('adminPanel');
        const userIcon = document.getElementById('userIcon');
        const userMenu = document.getElementById('userMenu'); 
        const loginForm = document.getElementById('loginForm');
        const adminLoginForm = document.getElementById('adminLoginForm');
        const userLoginForm = document.getElementById('userLoginForm');
        const adminLoginLink = document.getElementById('adminLoginLink');
        const userLoginLink = document.getElementById('userLoginLink');
        const adminLoginFormSubmit = document.getElementById('adminLoginForm');
        const productDetailModal = document.getElementById('productDetailModal');
        const closeProductModal = document.getElementById('closeProductModal');
        const productDetailContent = document.getElementById('productDetailContent');
        const paymentModal = document.getElementById('paymentModal');
        const closePaymentModal = document.getElementById('closePaymentModal');
        const paymentOptions = document.querySelectorAll('.payment-option');
        const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
        const qrModal = document.getElementById('qrModal');
        const closeQrModal = document.getElementById('closeQrModal');
        const qrTotal = document.getElementById('qrTotal');
        const confirmQrPaymentBtn = document.getElementById('confirmQrPaymentBtn');
        const confirmationModal = document.getElementById('confirmationModal');
        const closeConfirmationModal = document.getElementById('closeConfirmationModal');
        const confirmationTitle = document.getElementById('confirmationTitle');
        const confirmationMessage = document.getElementById('confirmationMessage');
        const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const productForm = document.getElementById('productForm');
        const adminTabs = document.querySelectorAll('.admin-tab');
        const adminSections = document.querySelectorAll('.admin-section');
        const addToCartCombo = document.querySelector('.add-to-cart-combo');   
        const whatsappFloatBtn = document.getElementById('whatsappFloatBtn');

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            // Cargar datos del localStorage si existen
            loadFromLocalStorage();
            renderProducts();
            setupEventListeners();
            renderAdminProductList();
            updateCartUI();
            loadPurchaseHistory();
            renderAdminOrders();
            
            
            // Ocultar formularios de login al inicio
            loginForm.style.display = 'none';
            adminLoginForm.style.display = 'none';
        });

        // Cargar datos del localStorage
        function loadFromLocalStorage() {
            const savedProducts = localStorage.getItem('Products');
            const savedCart = localStorage.getItem('Cart');
            const savedUser = localStorage.getItem('User');
            const savedAdmin = localStorage.getItem('Admin');
            
            if (savedProducts) {
                products = JSON.parse(savedProducts);
            }
            
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
            
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
            }
            
            if (savedAdmin) {
                currentAdmin = JSON.parse(savedAdmin);
            }
        }

        // Guardar datos en localStorage
        function saveToLocalStorage() {
            localStorage.setItem('Products', JSON.stringify(products));
            localStorage.setItem('Cart', JSON.stringify(cart));
            localStorage.setItem('User', JSON.stringify(currentUser));
            localStorage.setItem('Admin', JSON.stringify(currentAdmin));
        }

        // Configurar event listeners
        function setupEventListeners() {
            // Filtros de productos
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    renderProducts(this.dataset.filter);
                });
            });
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', function() {
                    const cat = this.dataset.category;
                    filterBtns.forEach(b => b.classList.remove('active'));
                    const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
                    if (btn) btn.classList.add('active');
                    renderProducts(cat);
                    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Búsqueda de productos
            searchBox.addEventListener('input', function() {
                renderProducts(document.querySelector('.filter-btn.active').dataset.filter, this.value);
            });

            // Carrito
            cartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                cartSidebar.classList.add('open');
            });

            closeCartBtn.addEventListener('click', function() {
                cartSidebar.classList.remove('open');
            });

            clearCartBtn.addEventListener('click', clearCart);

            checkoutBtn.addEventListener('click', function() {
                if (cart.length === 0) {
                    showNotification('Tu carrito está vacío', 'warning');
                    return;
                }
                
                cartSidebar.classList.remove('open');
                paymentModal.style.display = 'flex';
            });
            // cargar historial desde localStorage (ejecutar desde loadFromLocalStorage también)
function loadPurchaseHistory() {
    const saved = localStorage.getItem('PurchaseHistory');
    if (saved) {
        try {
            purchaseHistory = JSON.parse(saved);
        } catch (e) {
            purchaseHistory = [];
        }
    } else {
        purchaseHistory = [];
    }
}

// guardar historial
function savePurchaseHistory() {
    localStorage.setItem('PurchaseHistory', JSON.stringify(purchaseHistory));
}

// crear y agregar un pedido al historial
function addOrderToHistory(order) {
    // order: { id, dateISO, items: [{id,name,price,quantity}], total, method, customer: {name,email}, status }
    const timestamp = new Date().toISOString();
    const id = `ORD-${Date.now()}`; // id simple único
    const entry = Object.assign({ id, dateISO: timestamp }, order);
    purchaseHistory.unshift(entry); // guardar al inicio (más reciente primero)
    // opcional: limitar historial a X entradas
    const MAX = 200;
    if (purchaseHistory.length > MAX) purchaseHistory = purchaseHistory.slice(0, MAX);
    savePurchaseHistory();
    renderAdminOrders(); // actualizar vista admin si está visible
    return entry;
}

            // Login de usuario
            userIcon.addEventListener('click', function() {
                if (currentUser) {
                    // Mostrar menú de usuario
                    showNotification(`Bienvenido ${currentUser.name}`, 'success');
                } else {
                    loginForm.style.display = 'block';
                    adminLoginForm.style.display = 'none';
                }
            });

            userLoginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('userEmail').value;
                const password = document.getElementById('userPassword').value;
                
                // Simulación de login
                if (email && password) {
                    currentUser = {
                        name: email.split('@')[0],
                        email: email
                    };
                    saveToLocalStorage();
                    loginForm.style.display = 'none';
                    showNotification(`Bienvenido ${currentUser.name}`, 'success');
                } else {
                    showNotification('Por favor completa todos los campos', 'warning');
                }
            });


// Renderiza el contenido del userMenu según estado (logueado/no logueado)
function renderUserMenu() {
    if (!userMenu) return;

    if (currentUser) {
        // menú para usuario conectado
        const initial = (currentUser.name && currentUser.name[0]) ? currentUser.name[0].toUpperCase() : 'U';
        userMenu.innerHTML = `
            <div class="user-greeting">
                <div class="avatar">${initial}</div>
                <div>
                    <div style="font-weight:700;">Hola, ${currentUser.name}</div>
                    <div style="font-size:0.85rem; color:var(--text-secondary)">${currentUser.email}</div>
                </div>
            </div>
            <button id="miCuentaBtn" class="btn btn-secondary">Mi cuenta</button>
            <button id="logoutBtn" class="btn btn-primary">Cerrar sesión</button>
        `;
        // listeners
        document.getElementById('logoutBtn').addEventListener('click', function() {
            logout();
            hideUserMenu();
        });
        document.getElementById('miCuentaBtn').addEventListener('click', function() {
            // Aquí puedes dirigir al usuario a su perfil o mostrar más info
            showNotification('Función "Mi cuenta" (pendiente de implementar)', 'info');
        });
    } else {
        // mostrar formulario de login dentro del panel (reutiliza markup)
        userMenu.innerHTML = `
            <div class="login-form" style="background:transparent;padding:0;">
                <h3 style="margin-bottom:12px;">Iniciar Sesión</h3>
                <form id="userLoginFormDropdown">
                    <div class="form-group">
                        <label for="userEmailDrop">Correo Electrónico</label>
                        <input type="email" id="userEmailDrop" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="userPasswordDrop">Contraseña</label>
                        <input type="password" id="userPasswordDrop" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                    <div style="text-align:center; margin-top:8px;">
                        <a href="#" id="adminLoginLinkDropdown">Acceso Administrador</a>
                    </div>
                </form>
            </div>
        `;

        // submit handler para el formulario en el dropdown
        const form = document.getElementById('userLoginFormDropdown');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('userEmailDrop').value.trim();
            const password = document.getElementById('userPasswordDrop').value.trim();

            if (email && password) {
                // Simulación de login. Si tienes API, aquí llamarías.
                currentUser = { name: email.split('@')[0], email: email };
                saveToLocalStorage(); // ya definida en tu script
                renderUserState();     // actualiza icono/estado
                showNotification(`Bienvenido ${currentUser.name}`, 'success');
                hideUserMenu();
            } else {
                showNotification('Por favor completa todos los campos', 'warning');
            }
        });

        // link para admin (si quieres seguir con tu flujo actual)
        document.getElementById('adminLoginLinkDropdown').addEventListener('click', function(ev) {
            ev.preventDefault();
            hideUserMenu();
            // Mostrar tu formulario admin existente (si lo prefieres)
            if (adminLoginForm) adminLoginForm.style.display = 'block';
        });
    }
}

// Muestra/oculta el panel
function toggleUserMenu() {
    if (!userMenu) return;
    if (userMenu.style.display === 'block') {
        hideUserMenu();
    } else {
        renderUserMenu();
        userMenu.style.display = 'block';
    }
}
function hideUserMenu() {
    if (!userMenu) return;
    userMenu.style.display = 'none';
}

// Logout: limpia user, guarda y notifica
function logout() {
    currentUser = null;
    saveToLocalStorage();
    renderUserState();
    showNotification('Sesión cerrada', 'success');
}

// Actualiza la UI del icono (puedes mostrar iniciales o mantener emoji)
function renderUserState() {
    if (!userIcon) return;
    if (currentUser) {
        const initial = currentUser.name ? currentUser.name[0].toUpperCase() : 'U';
        userIcon.textContent = initial; // reemplaza el emoji por la inicial
        userIcon.style.fontWeight = '700';
        userIcon.title = `Hola, ${currentUser.name}`;
    } else {
        userIcon.textContent = '👤';
        userIcon.title = 'Iniciar sesión';
    }
}

// Cambia el handler del icono para usar el dropdown (reemplaza el antiguo)
userIcon.removeEventListener?.('click', null); // intento seguro (no da error si no existe)
userIcon.addEventListener('click', function(e) {
    e.stopPropagation(); // evita que el click se propague y cierre el panel
    toggleUserMenu();
});

// Cerrar el menu si haces click fuera
window.addEventListener('click', function(e) {
    if (!userMenu) return;
    const targetInside = userMenu.contains(e.target) || userIcon.contains(e.target);
    if (!targetInside) hideUserMenu();
});

// Inicializa el estado del icono al cargar
renderUserState();

            // Login de administrador
            adminLoginLink.addEventListener('click', function(e) {
                e.preventDefault();
                loginForm.style.display = 'none';
                adminLoginForm.style.display = 'block';
            });

            userLoginLink.addEventListener('click', function(e) {
                e.preventDefault();
                adminLoginForm.style.display = 'none';
                loginForm.style.display = 'block';
            });

            adminLoginFormSubmit.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('adminEmail').value;
                const password = document.getElementById('adminPassword').value;
                
                // Simulación de login admin
                if (email === 'admin@gmail.com' && password === 'admin123') {
                    currentAdmin = {
                        name: 'Administrador',
                        email: email
                    };
                    saveToLocalStorage();
                    adminLoginForm.style.display = 'none';
                    adminPanel.style.display = 'block';
                    window.scrollTo(0, document.getElementById('adminPanel').offsetTop);
                    showNotification('Sesión de administrador iniciada', 'success');
                } else {
                    showNotification('Credenciales incorrectas.', 'warning');
                }
            });

            // Modales de productos
            closeProductModal.addEventListener('click', function() {
                productDetailModal.style.display = 'none';
            });

            // Modales de pago
            closePaymentModal.addEventListener('click', function() {
                paymentModal.style.display = 'none';
            });

            paymentOptions.forEach(option => {
                option.addEventListener('click', function() {
                    paymentOptions.forEach(o => o.style.backgroundColor = '');
                    this.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
                    confirmPaymentBtn.dataset.method = this.dataset.method;
                });
            });

            confirmPaymentBtn.addEventListener('click', function() {
                const method = this.dataset.method;
                
                if (!method) {
                    showNotification('Por favor selecciona un método de pago', 'warning');
                    return;
                }
                
                paymentModal.style.display = 'none';

                // construir resumen del pedido
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const itemsCopy = cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity }));
                const orderObj = {
                    items: itemsCopy,
                    total: parseFloat(total.toFixed(2)),
                    method: method,
                    customer: currentUser ? { name: currentUser.name, email: currentUser.email } : null,
                    status: method === 'reservation' ? 'Reservado' : (method === 'cash' ? 'Pendiente - Efectivo' : 'Pago QR pendiente')
                };

                // guardar en historial
                const savedOrder = addOrderToHistory(orderObj);

                // mostrar confirmación local (modal)
                if (method === 'cash') {
                    showConfirmation('Pago en Efectivo', 'Tu pedido ha sido confirmado. Pagarás al recibir tu producto.');
                    // limpiar carrito después de aceptar (se hace al cerrar confirmación en tu código actual)
                } else if (method === 'reservation') {
                    showConfirmation('Reserva Confirmada', 'Tu producto ha sido reservado. Te contactaremos por WhatsApp para confirmar.');
                } else if (method === 'qr') {
                    qrTotal.textContent = `Bs ${total.toFixed(2)}`;
                    qrModal.style.display = 'flex';
                }

                // abrir WhatsApp automáticamente con el resumen del pedido
                const waMessageLines = [];
                waMessageLines.push('Hola 👋 quiero confirmar este pedido:');
                itemsCopy.forEach(it => waMessageLines.push(`- ${it.name} x ${it.quantity} = Bs ${(it.price * it.quantity).toFixed(2)}`));
                waMessageLines.push(`Total: Bs ${orderObj.total.toFixed(2)}`);
                waMessageLines.push(`Método: ${method === 'cash' ? 'Efectivo al recibir' : method === 'reservation' ? 'Reserva' : 'Pago con QR'}`);
                if (currentUser) {
                    waMessageLines.push(`Nombre: ${currentUser.name}`);
                    waMessageLines.push(`Email: ${currentUser.email}`);
                } else {
                    waMessageLines.push('Nombre: [por favor indicar]');
                }
                waMessageLines.push('Dirección: [por favor indicar]');
                waMessageLines.push(`ID pedido: ${savedOrder.id}`);
                const encoded = encodeURIComponent(waMessageLines.join('\n'));
                window.open(`https://wa.me/59179302129?text=${encoded}`, '_blank');
            });


            // Modal QR
            closeQrModal.addEventListener('click', function() {
                qrModal.style.display = 'none';
            });

            confirmQrPaymentBtn.addEventListener('click', function() {
                qrModal.style.display = 'none';
                // marcar como pagado
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const itemsCopy = cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity }));
                const orderObj = {
                    items: itemsCopy,
                    total: parseFloat(total.toFixed(2)),
                    method: 'qr',
                    customer: currentUser ? { name: currentUser.name, email: currentUser.email } : null,
                    status: 'Pagado con QR'
                };
                const savedOrder = addOrderToHistory(orderObj);

                showConfirmation('Pago con QR Confirmado', 'Tu pago ha sido procesado correctamente. Recibirás tu pedido pronto.');

                // abrir WhatsApp con comprobante/confirmación (opcionalmente incluye id pedido)
                const waLines = [];
                waLines.push('Hola 👋 ya realicé el pago con QR para este pedido:');
                itemsCopy.forEach(it => waLines.push(`- ${it.name} x ${it.quantity} = Bs ${(it.price * it.quantity).toFixed(2)}`));
                waLines.push(`Total: Bs ${orderObj.total.toFixed(2)}`);
                waLines.push(`Método: Pago con QR`);
                waLines.push(`ID pedido: ${savedOrder.id}`);
                waLines.push('Adjunto el comprobante: [pega aquí el enlace o foto]');
                const encoded = encodeURIComponent(waLines.join('\n'));
                window.open(`https://wa.me/59179302129?text=${encoded}`, '_blank');

                // limpiar carrito cuando el usuario cierre la confirmación (tu handler actual ya llama a clearCart)
            });


            // Modal de confirmación
            closeConfirmationModal.addEventListener('click', function() {
                confirmationModal.style.display = 'none';
            });

            closeConfirmationBtn.addEventListener('click', function() {
                confirmationModal.style.display = 'none';
                // Limpiar carrito después de confirmación
                if (confirmationTitle.textContent !== 'Reserva Confirmada') {
                    clearCart();
                }
            });

            // Menú móvil
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
            });

            // Formulario de producto (admin)
            productForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value) || 0;
    const stock = parseInt(document.getElementById('productStock').value) || 0;
    const description = document.getElementById('productDescription').value.trim();
    const image = document.getElementById('productImage').value.trim() || 'https://via.placeholder.com/400x300.png?text=Producto';

    if (!name) {
        alert('El nombre es obligatorio');
        return;
    }

    if (editingProductId) {
        // actualizar existente
        const prod = products.find(p => p.id === editingProductId);
        if (!prod) { alert('Producto a editar no encontrado'); editingProductId = null; return; }
        prod.name = name;
        prod.category = category;
        prod.price = price;
        prod.stock = stock;
        prod.description = description;
        prod.image = image;
        prod.badge = stock > 0 ? prod.badge : 'soldout';
        editingProductId = null;
        alert('Producto actualizado');
    } else {
        // crear nuevo
        const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
        const newProduct = { id: newId, name, category, price, stock, description, image, badge: stock > 0 ? null : 'soldout' };
        products.push(newProduct);
        alert('Producto añadido');
    }

    productForm.reset();
    saveToLocalStorage();
    renderProducts(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
    renderAdminProductList();
});


            // Tabs del admin
            adminTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabId = this.dataset.tab;
                    
                    adminTabs.forEach(t => t.classList.remove('active'));
                    adminSections.forEach(s => s.classList.remove('active'));
                    
                    this.classList.add('active');
                    document.getElementById(`${tabId}-section`).classList.add('active');
                });
            });

            // Botón de combo destacado
            addToCartCombo.addEventListener('click', function() {
                const comboId = parseInt(this.dataset.id);
                // En una implementación real, aquí se añadiría el combo al carrito
                addToCart(1001); // ID temporal para el combo
            });

            

            // Botón flotante de WhatsApp
            whatsappFloatBtn.addEventListener('click', function() {
                sendWhatsAppOrder();
            });

            // Cerrar modales al hacer clic fuera
            window.addEventListener('click', function(e) {
                if (e.target === productDetailModal) {
                    productDetailModal.style.display = 'none';
                }
                if (e.target === paymentModal) {
                    paymentModal.style.display = 'none';
                }
                if (e.target === qrModal) {
                    qrModal.style.display = 'none';
                }
                if (e.target === confirmationModal) {
                    confirmationModal.style.display = 'none';
                }
                if (e.target === loginForm) {
                    loginForm.style.display = 'none';
                }
                if (e.target === adminLoginForm) {
                    adminLoginForm.style.display = 'none';
                }
            });
        }

        // Renderizar productos
        function renderProducts(filter = 'all', searchTerm = '') {
            productGrid.innerHTML = '';
            
            let filteredProducts = products;
            
            // Aplicar filtro
            if (filter !== 'all') {
                filteredProducts = products.filter(product => product.category === filter);
            }
            
            // Aplicar búsqueda
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                filteredProducts = filteredProducts.filter(product => 
                    product.name.toLowerCase().includes(term) || 
                    product.description.toLowerCase().includes(term)
                );
            }
            
            // Renderizar productos
            if (filteredProducts.length === 0) {
                productGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px;">No se encontraron productos</p>';
                return;
            }
            
            filteredProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.dataset.id = product.id;
                
                let badgeHTML = '';
                if (product.badge === 'new') {
                    badgeHTML = '<div class="product-badge badge-new">NUEVO</div>';
                } else if (product.badge === 'soldout') {
                    badgeHTML = '<div class="product-badge badge-soldout">AGOTADO</div>';
                } else if (product.badge === 'promo') {
                    badgeHTML = '<div class="product-badge badge-promo">PROMO</div>';
                }
                
                const isAvailable = product.stock > 0;
                const addToCartBtn = isAvailable ? 
                    `<button class="btn btn-primary btn-small add-to-cart-btn">🛒 Añadir</button>` :
                    `<button class="btn btn-primary btn-small btn-disabled" disabled>🛒 Agotado</button>`;
                
                productCard.innerHTML = `
                    <div class="product-img" style="background-image: url('${product.image}')">
                        ${badgeHTML}
                    </div>
                    <div class="product-content">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-desc">${product.description}</p>
                        <div class="product-price">Bs ${product.price.toFixed(2)}</div>
                        <div class="product-actions">
                            ${addToCartBtn}
                            <button class="btn btn-secondary btn-small view-detail-btn">Ver Detalles</button>
                        </div>
                    </div>
                `;
                
                productGrid.appendChild(productCard);
            });
            
            // Añadir event listeners a los botones de los productos
            document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.closest('.product-card').dataset.id);
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('.view-detail-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const productId = parseInt(this.closest('.product-card').dataset.id);
                    showProductDetail(productId);
                });
            });
        }

        // Mostrar detalles del producto
        function showProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product) return;
            
            const isAvailable = product.stock > 0;
            const addToCartBtn = isAvailable ? 
                `<button class="btn btn-primary" id="addToCartDetailBtn">🛒 Añadir al Carrito</button>` :
                `<button class="btn btn-primary btn-disabled" disabled>Producto Agotado</button>`;
            
            productDetailContent.innerHTML = `
                <div class="product-detail-image" style="background-image: url('${product.image}')"></div>
                <div class="product-detail-info">
                    <h3 class="product-detail-title">${product.name}</h3>
                    <p class="product-detail-description">${product.description}</p>
                    <div class="product-detail-price">Bs ${product.price.toFixed(2)}</div>
                    <div class="quantity-selector">
                        <button class="quantity-btn" id="decreaseQuantity">-</button>
                        <span class="quantity-display" id="quantityDisplay">1</span>
                        <button class="quantity-btn" id="increaseQuantity">+</button>
                    </div>
                    ${addToCartBtn}
                    <button class="btn btn-secondary" id="whatsappProductBtn" style="margin-top: 10px; width: 100%;">
                        💬 Pedir por WhatsApp
                    </button>
                </div>
            `;
            
            productDetailModal.style.display = 'flex';
            
            // Configurar event listeners para el modal de detalle
            let quantity = 1;
            const quantityDisplay = document.getElementById('quantityDisplay');
            
            document.getElementById('increaseQuantity').addEventListener('click', function() {
                if (quantity < product.stock) {
                    quantity++;
                    quantityDisplay.textContent = quantity;
                }
            });
            
            document.getElementById('decreaseQuantity').addEventListener('click', function() {
                if (quantity > 1) {
                    quantity--;
                    quantityDisplay.textContent = quantity;
                }
            });
            
            if (isAvailable) {
                document.getElementById('addToCartDetailBtn').addEventListener('click', function() {
                    for (let i = 0; i < quantity; i++) {
                        addToCart(productId);
                    }
                    productDetailModal.style.display = 'none';
                    showNotification('Producto añadido al carrito', 'success');
                });
            }
            
            document.getElementById('whatsappProductBtn').addEventListener('click', function() {
                sendSingleProductWhatsApp(product, quantity);
                productDetailModal.style.display = 'none';
            });
        }

        // Añadir producto al carrito
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            
            if (!product || product.stock <= 0) {
                showNotification('Este producto no está disponible', 'warning');
                return;
            }
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                });
            }
            
            // Actualizar stock (simulado)
            product.stock -= 1;
            if (product.stock === 0) {
                product.badge = 'soldout';
            }
            
            updateCartUI();
            saveToLocalStorage();
            showNotification('Producto añadido al carrito', 'success');
        }

        // Actualizar interfaz del carrito
        function updateCartUI() {
            cartItems.innerHTML = '';
            let total = 0;
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p style="text-align: center; padding: 20px;">Tu carrito está vacío</p>';
            } else {
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <div class="cart-item-price">Bs ${item.price.toFixed(2)} x ${item.quantity} = Bs ${itemTotal.toFixed(2)}</div>
                            <div class="cart-item-actions">
                                <button class="quantity-btn decrease-btn">-</button>
                                <span>${item.quantity}</span>
                                <button class="quantity-btn increase-btn">+</button>
                                <button class="btn btn-secondary btn-small remove-btn">Eliminar</button>
                            </div>
                        </div>
                    `;
                    
                    cartItems.appendChild(cartItem);
                    
                    // Event listeners para los botones del carrito
                    cartItem.querySelector('.decrease-btn').addEventListener('click', function() {
                        if (item.quantity > 1) {
                            item.quantity -= 1;
                            // Restaurar stock (simulado)
                            const product = products.find(p => p.id === item.id);
                            if (product) {
                                product.stock += 1;
                                if (product.stock > 0 && product.badge === 'soldout') {
                                    product.badge = null;
                                }
                            }
                        } else {
                            cart = cart.filter(cartItem => cartItem.id !== item.id);
                            // Restaurar stock (simulado)
                            const product = products.find(p => p.id === item.id);
                            if (product) {
                                product.stock += 1;
                                if (product.stock > 0 && product.badge === 'soldout') {
                                    product.badge = null;
                                }
                            }
                        }
                        updateCartUI();
                        saveToLocalStorage();
                    });
                    
                    cartItem.querySelector('.increase-btn').addEventListener('click', function() {
                        const product = products.find(p => p.id === item.id);
                        if (product && product.stock > 0) {
                            item.quantity += 1;
                            product.stock -= 1;
                            if (product.stock === 0) {
                                product.badge = 'soldout';
                            }
                            updateCartUI();
                            saveToLocalStorage();
                        } else {
                            showNotification('No hay más stock disponible', 'warning');
                        }
                    });
                    
                    cartItem.querySelector('.remove-btn').addEventListener('click', function() {
                        // Restaurar stock (simulado)
                        const product = products.find(p => p.id === item.id);
                        if (product) {
                            product.stock += item.quantity;
                            if (product.stock > 0 && product.badge === 'soldout') {
                                product.badge = null;
                            }
                        }
                        cart = cart.filter(cartItem => cartItem.id !== item.id);
                        updateCartUI();
                        saveToLocalStorage();
                        renderProducts(); // Actualizar vista de productos
                    });
                });
            }
            
            cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartTotal.textContent = `Bs ${total.toFixed(2)}`;
        }

        // Vaciar carrito
        function clearCart() {
            if (cart.length === 0) {
                showNotification('Tu carrito ya está vacío', 'info');
                return;
            }
            
            // Restaurar stock (simulado)
            cart.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    product.stock += item.quantity;
                    if (product.stock > 0 && product.badge === 'soldout') {
                        product.badge = null;
                    }
                }
            });
            
            cart = [];
            updateCartUI();
            saveToLocalStorage();
            renderProducts(); // Actualizar vista de productos
            showNotification('Carrito vaciado', 'info');
        }

        // Mostrar notificación
        function showNotification(message, type = 'info') {
            // En una implementación real, aquí se usaría una librería de notificaciones
            console.log(`${type.toUpperCase()}: ${message}`);
            alert(message);
        }

        // Mostrar confirmación
        function showConfirmation(title, message) {
            confirmationTitle.textContent = title;
            confirmationMessage.textContent = message;
            confirmationModal.style.display = 'flex';
        }

        // Enviar pedido por WhatsApp
        function sendWhatsAppOrder() {
            if (cart.length === 0) {
                showNotification('Tu carrito está vacío', 'warning');
                return;
            }
            
            let message = `Hola 👋 quiero hacer este pedido:\n`;
            
            cart.forEach(item => {
                message += `- ${item.name} (Bs ${item.price}) x ${item.quantity} = Bs ${(item.price * item.quantity).toFixed(2)}\n`;
            });
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            message += `Total: Bs ${total.toFixed(2)}\n`;
            
            message += `Dirección: [Por favor indica tu dirección]\n`;
            message += `Pago: Efectivo al recibir\n`;
            message += `¡Gracias!`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/59179302129?text=${encodedMessage}`, '_blank');
        }

        // Enviar producto individual por WhatsApp
        function sendSingleProductWhatsApp(product, quantity = 1) {
            let message = `Hola 👋 me interesa este producto:\n`;
            message += `- ${product.name} (Bs ${product.price}) x ${quantity} = Bs ${(product.price * quantity).toFixed(2)}\n`;
            
            
            message += `¿Podrían darme más información?`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/59179302129?text=${encodedMessage}`, '_blank');
        }

        // Añadir producto desde formulario de admin
        function addProductFromForm() {
            const name = document.getElementById('productName').value;
            const category = document.getElementById('productCategory').value;
            const price = parseFloat(document.getElementById('productPrice').value);
            const stock = parseInt(document.getElementById('productStock').value);
            const description = document.getElementById('productDescription').value;
            const image = document.getElementById('productImage').value || 'https://images.unsplash.com/photo-1578916045372-fe756d9dde10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
            
            const newProduct = {
                id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
                name,
                category,
                price,
                stock,
                description,
                image,
                badge: stock > 0 ? null : 'soldout'
            };
            
            products.push(newProduct);
            renderProducts();
            saveToLocalStorage();
            
            // Limpiar formulario
            productForm.reset();
            
            showNotification('Producto añadido correctamente', 'success');
        }

        // =========================
// FUNCIONES CRUD PARA ADMIN
// =========================

function renderAdminProductList() {
    const adminProductList = document.getElementById('adminProductList');
    if (!adminProductList) return;
    adminProductList.innerHTML = '';

    if (products.length === 0) {
        adminProductList.innerHTML = '<p>No hay productos.</p>';
        return;
    }

    products.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'admin-product-item';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.padding = '10px';
        div.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        div.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <img src="${prod.image}" alt="${prod.name}" width="60" style="border-radius:8px; object-fit:cover;">
                <div>
                    <strong style="display:block;">${prod.name}</strong>
                    <small>Bs ${prod.price} — ${prod.category} — Stock: ${prod.stock}</small>
                </div>
            </div>
            <div style="display:flex;gap:8px;">
                <button class="btn btn-small btn-secondary" onclick="editProduct(${prod.id})">✏️ Editar</button>
                <button class="btn btn-small btn-danger" onclick="deleteProduct(${prod.id})">🗑️ Eliminar</button>
            </div>
        `;
        adminProductList.appendChild(div);
    });
}

function editProduct(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return alert('Producto no encontrado');

    document.getElementById('productName').value = prod.name;
    document.getElementById('productCategory').value = prod.category;
    document.getElementById('productPrice').value = prod.price;
    document.getElementById('productStock').value = prod.stock;
    document.getElementById('productDescription').value = prod.description;
    document.getElementById('productImage').value = prod.image;

    editingProductId = id;
    // opcional: hacer scroll al formulario
    document.getElementById('productName').scrollIntoView({ behavior: 'smooth' });
}

function deleteProduct(id) {
    if (!confirm('¿Deseas eliminar este producto?')) return;
    products = products.filter(p => p.id !== id);
    saveToLocalStorage();
    renderProducts(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
    renderAdminProductList();
    alert('Producto eliminado');
}
function renderAdminOrders() {
    // Debe existir un contenedor en tu admin: por ejemplo un <div id="adminOrdersList"></div> dentro de #orders-section
    const container = document.getElementById('adminOrdersList');
    if (!container) return;
    container.innerHTML = '';
    if (!purchaseHistory.length) {
        container.innerHTML = '<p>No hay pedidos aún.</p>';
        return;
    }
    purchaseHistory.forEach(order => {
        const div = document.createElement('div');
        div.className = 'admin-order';
        div.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        div.style.padding = '10px 0';
        div.innerHTML = `
            <strong>${order.id}</strong> — ${new Date(order.dateISO).toLocaleString()} — ${order.method} — Bs ${order.total.toFixed(2)}
            <div style="margin-top:6px;"><small>${order.customer ? order.customer.name : 'Sin usuario'}</small></div>
            <div style="margin-top:8px;">
                ${order.items.map(i => `<div>${i.name} x ${i.quantity} — Bs ${(i.price * i.quantity).toFixed(2)}</div>`).join('')}
            </div>
        `;
        container.appendChild(div);
    });
}


    localStorage.clear();
