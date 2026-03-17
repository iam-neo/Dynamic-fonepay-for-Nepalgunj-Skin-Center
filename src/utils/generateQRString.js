import { crc16 } from './crc16';

/**
 * Build Fonepay-compatible EMVCo QR string with dynamic amount.
 * Logic is identical to the original HTML version.
 *
 * @param {number} amount  — payment amount in NPR
 * @param {string} remarks — optional remarks/reference
 * @returns {{ qrString: string, amtStr: string, crc: string, txnId: string }}
 */
export function generateQRString(amount, remarks = 'Payment') {
    let qr = '000201'; // Payload Format Indicator

    // CRITICAL: 010212 = Dynamic (not 010211 Static) for amount auto-fill
    qr += '010212';

    // Tag 37: Merchant identifier (from working QR)
    qr += '37139105240052044';

    // Tag 26: FonePay data
    // 0011fonepay.com + 01102109020664 + 0206497140
    qr += '26390011fonepay.com011021090206640206497140';

    // Tag 52: Merchant Category Code
    qr += '52048012';

    // Tag 53: Currency Code (524 = NPR)
    qr += '5303524';

    // Tag 54: Transaction Amount (enables auto-fill)
    const amtStr = amount.toFixed(2);
    qr += '54' + amtStr.length.toString().padStart(2, '0') + amtStr;

    // Tag 58: Country Code
    qr += '5802NP';

    // Tag 59: Merchant Name
    qr += '5921NEPALGUNJ SKIN CENTER';

    // Tag 60: Merchant City
    qr += '6005Banke';

    // Tag 62: Additional Data
    const txnId = 'TXN' + Date.now().toString().slice(-6);
    const addData =
        '07' +
        '06' +
        '497140' +
        '02' +
        txnId.length.toString().padStart(2, '0') +
        txnId +
        '08' +
        remarks.length.toString().padStart(2, '0') +
        remarks;
    qr += '62' + addData.length.toString().padStart(2, '0') + addData;

    // Tag 63: CRC
    qr += '6304';
    const crc = crc16(qr);
    qr += crc;

    return { qrString: qr, amtStr, crc, txnId };
}
