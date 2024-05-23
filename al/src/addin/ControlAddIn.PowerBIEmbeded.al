controladdin EmbededPowerBIJavascript
{
    VerticalStretch = true;
    VerticalShrink = false;

    HorizontalStretch = true;
    HorizontalShrink = false;

    RequestedHeight = 1200;

    Scripts =
        'https://code.jquery.com/jquery-3.7.0.min.js',
        'scripts\lib\powerbi.min.js',
        'scripts\main.js';

    StyleSheets =
        'stylesheets\index.css';

    StartupScript = 'scripts\startup.js';

    event MyEvent()

    procedure MyProcedure()
}