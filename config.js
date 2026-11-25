// الإعدادات الوحيدة اللي تحتاج تغيّرها بالموقع
window.MQ_CONFIG = {
  // رابط Web App من Apps Script (ينتهي بـ /exec)
  API_URL: 'https://script.google.com/macros/s/AKfycbwXyGBItIM0JaiOx_xdyyByhoT5qT5v9nCYa7ceFrGkEzvzs4Vtfpt0AQOov8wrigHPNw/exec',
  // App ID من OneSignal (اتركه فارغ إذا بعدك ما فعّلت الإشعارات)
  ONESIGNAL_APP_ID: ''
};

window.mqApi = async function (data) {
  const url = window.MQ_CONFIG.API_URL;
  if (!url || url.indexOf('http') !== 0) return { ok: false, error: 'النظام بعده ما مربوط بالسيرفر (config.js)' };
  try {
    const res = await fetch(url, { method: 'POST', body: JSON.stringify(data) });
    return await res.json();
  } catch (e) {
    return { ok: false, error: 'تأكد من الإنترنت وحاول مرة ثانية' };
  }
};
