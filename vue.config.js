const { useCssModule } = require("vue");

useCssModule.exports = {
    
    publicPath: ProcessingInstruction.env.NODE_ENV === 'production'

    ? '/markdown-parser/'

    :'/'
    
}