
const SlackApi = require('../slack-api');

class TemplateMode {

    static send() {

        if(process.env.SLACK_TEMPLATE_BODY){
            console.error('SLACK_TEMPLATE_BODY env variable should be present');
            process.exit(1);
        }

        if(process.env.SLACK_TEMPLATE_FIELDS){
            console.error('SLACK_TEMPLATE_FIELDS env variable should be present');
            process.exit(1);
        }

        const template = JSON.parse(process.env.SLACK_TEMPLATE_BODY);
        const fields = JSON.parse(process.env.SLACK_TEMPLATE_FIELDS);

        template.fields = fields;

        SlackApi.send(process.env.SLACK_TEXT, template, process.env.SLACK_USER_NAME, process.env.SLACK_ICON_EMOJI);
    }

}

module.exports = TemplateMode;
