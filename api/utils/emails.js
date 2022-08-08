const from = 'jramirez@humantech.pe';
//https://dev.mailjet.com/email/guides/send-api-v31/
const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    'cb7174c22c00e2e2d1d7515d5382ebc3',
    'da5a4b5e15a8ded3835a43880a4d1a10',
);


const email = async function main(options, fileBase64) {
    const data = {
        Messages: [
            {
                From: {
                    Email: from,
                    Name: "Humantech",
                },
                To: [
                    {
                        Email: options.email,
                        Name: options?.name,
                    }
                ],
                Subject: options.subject,
                TextPart: `Teléfono: ${options?.phone} Nombre: ${options?.name} ${options.message}`
                // HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }]
    }
    if (fileBase64){
        data['Messages'][0]['Attachments'] = [
            {
                ContentType: "application/pdf",
                Filename: "cv.pdf",
                Base64Content: fileBase64
            }
        ]
    }
    return mailjet
        .post('send', {version: 'v3.1'})
        .request(data);
}


module.exports = email;