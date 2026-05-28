// Payment Constants
const PAYMENT = {
  UPI_ID: '9063939760@ptsbi',
  AMOUNT: '299',
  MERCHANT_NAME: 'Urban Miles',
  QR_CODE_IMAGE: 'payment-qr.png', // Static QR code image
  PLACEHOLDER_IMAGE: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180"%3E%3Crect width="180" height="180" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy="0.3em" font-family="Barlow, sans-serif" font-size="14" fill="%22999"%3ELoading QR Code...%3C/text%3E%3C/svg%3E',
  
  generateUPIString: function() {
    return 'upi://pay?pa=' + encodeURIComponent(this.UPI_ID) + 
           '&pn=' + encodeURIComponent(this.MERCHANT_NAME) + 
           '&am=' + this.AMOUNT + 
           '&tn=' + encodeURIComponent('Urban Miles Registration');
  }
};
