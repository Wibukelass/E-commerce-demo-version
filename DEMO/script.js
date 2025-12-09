// =============================================
// DEMO VERSION - E-COMMERCE PWA
// Full source code available for $79.99
// Contact: fazaradriansyah231@gmail.com
// =============================================

console.log('%c🚀 E-COMMERCE PWA DEMO', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cFull version ($79.99) available for purchase', 'color: #666;');

// Demo limitation - show buy button after 3 interactions
let interactionCount = 0;
const showBuyReminder = () => {
    interactionCount++;
    if (interactionCount === 3) {
        if (confirm('🚀 Enjoying this demo?\n\nBuy FULL SOURCE CODE ($79.99) for:\n• Complete code\n• Commercial license\n• No limitations')) {
            window.open('https://gumroad.com/l/xxxxxxxx', '_blank');
        }
    }
};

// Add to cart reminder
document.addEventListener('DOMContentLoaded', function() {
    // Add interaction listeners
    document.querySelectorAll('.add-to-cart, .product-card, button').forEach(btn => {
        btn.addEventListener('click', showBuyReminder);
    });
    
    // Show demo footer
    const demoFooter = document.createElement('div');
    demoFooter.innerHTML = `
        <div style="text-align:center; padding:15px; background:#f8f9fa; margin-top:30px; border-top:2px solid #ddd;">
            <p>💡 <strong>DEMO VERSION</strong> - Limited functionality</p>
            <a href="https://gumroad.com/l/xxxxxxxx" 
               style="background:#000; color:#fff; padding:10px 20px; border-radius:5px; text-decoration:none; display:inline-block; margin:10px;">
               🚀 BUY FULL VERSION - $79.99
            </a>
            <p style="font-size:12px; color:#666; margin-top:10px;">
                Includes: Complete source code • PWA setup • Commercial license
            </p>
        </div>
    `;
    document.body.appendChild(demoFooter);
});

// Rest of your existing JavaScript...