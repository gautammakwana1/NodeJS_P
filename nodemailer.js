var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'annabelle.weissnat45@ethereal.email',
        pass: 'c8hM4GXYPCee8FcDJt'
    }
});

var mailOptions= {
    from:'Kishan Solanki <hackerby8481@gmail.com>',
    to: 'ryan53@ethereal.email',
    subject : 'This is testing email...',
    html : "<h1>Hello This is Kishan Solanki</h1>"
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Email has been sent",info.response);
    }
});
