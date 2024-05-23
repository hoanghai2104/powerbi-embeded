HTMLContainer = document.getElementById('controlAddIn');

Initial();

function Initial()
{
    RenderHTML();
    Embed();
}

function RenderHTML()
{
    let html = '';
    html += '<html>';
    html += '   <head></head>';
    html += '   <body>';
    html += '           <span>Embeded Power BI Report</span>';
    html += '           <section id="report-container" class="embed-container"></section>';
    html += '   </body>';
    html += '</html>';
    html += '';
    html += '';

    html += '';
    html += '';

    HTMLContainer.insertAdjacentHTML('beforeend', html);
}