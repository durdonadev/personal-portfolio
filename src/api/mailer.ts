export class Mailer {
    emailjsServiceId: string;
    emailjsTemplateId: string;
    emailjsPublicKey: string;
    emailjsEndpoint: string;

    constructor() {
        this.emailjsServiceId = process.env
            .REACT_APP_EMAILJS_SERVICE_ID as string;
        this.emailjsTemplateId = process.env
            .REACT_APP_EMAILJS_TEMPLATE_ID as string;
        this.emailjsPublicKey = process.env
            .REACT_APP_EMAILJS_PUBLIC_KEY as string;
        this.emailjsEndpoint = process.env.REACT_APP_EMAILJS_ENDPOINT as string;
    }

    async sendMessage<T>(templateParams: T) {
        const body = {
            service_id: this.emailjsServiceId,
            template_id: this.emailjsTemplateId,
            user_id: this.emailjsPublicKey,
            template_params: { ...templateParams }
        };

        try {
            const response = await fetch(this.emailjsEndpoint, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (response.status === 200 && response.status < 300) {
                return response;
            } else {
                throw new Error("Error occured");
            }
        } catch (error) {
            throw error;
        }
    }
}
