var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'hackerby8481@gmail.com',
        pass: 'qwiy bfp fjjh sfw'
    }
});

var mailOptions= {
    from:'Kishan Solanki <hackerby8481@gmail.com>',
    to: 'hackerby8481@gmail.com , bhaiyakaleen18@gmail.com , kishanbar121212@gmail.com , kishansolnki26@gmail.com',
    subject : 'This is testing email...',
    html : `<h1>Hello I am Kishan Solanki From This side. 
            'Kem Cho Badha!' I hope All are Fine. 
            This Mail is sent from Gautam Makwana Through Nodemailer....</h1>`
};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Email has been sent",info.response);
    }
});
