import OtpGenerator from 'otp-generator'
import nodemailer from 'nodemailer'
import fs from 'fs'
import InlineCss from 'inline-css'
import { url } from 'inspector'

export const mailSender=async (email,OtpGenerator,otp_type)=>{
    let htmlContent=fs.readFileSync('otp_template.html','utf-8');
    htmlContent=htmlContent.replace('TradingApp_otp',otp);
    htmlContent=htmlContent.replace('TradingApp_otp2',otp_type);

    const options={
        url:' ',
    };

    htmlContent=await InlineCss(htmlContent,options)


    try {
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            port:process.env.MAIL_PORT,
            secure:false,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });


        const result=await transporter.sendMail({
            from:process.env.MAIL_FROM,
            to:email,
            subject:"Vitta Pravah Trading App - OTP Verification",
            html:htmlContent,
        });

        return result;


    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const generateOTP=()=>{
    const otp=OtpGenerator.generate(6,{
        upperCaseAlphabets:false,
        lowerCaseAlphabets:false,
        specialChars:false,

    });

    return otp;
}