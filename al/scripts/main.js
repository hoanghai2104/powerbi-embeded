function Embed()
{
    var models = window["powerbi-client"].models;
    if (models)
    {
        console.log('powerbi.min.js is loaded.');
    }
   
    var reportContainer = $("#report-container").get(0);

    let reportLoadConfig = {
        type: "report",
        tokenType: models.TokenType.Embed,
        accessToken: 'H4sIAAAAAAAEACWTxQ7sWAJD_-Vt01KYWupFGG-FKrhLhSvMMJp_n2rN3rLkY_s_f-z07sY0__P3H0k24X0qcM4aAm4V6KhlUch9VP5qLQoUXiV97pODszwS6ioggUOvT2MycbpA0pv3c0E_HaDQYoFoq8E_xbh-CvGjLLMKVPxnHhNbDMeRtEQIjNVXi6IzzGmbRrnyJWIKZNK6EainLhsLp7D9EV2xAFXX8Bwxt6Gs0t8c6MVr26mugzC6IGRRCUl_QyDYEIyhU539kzZP-ZDUPaDQkUlJqfmGSZGMyNyYZDoTC7N3ULEontjQicvydRP-eXqVKzS8ntEL0qHEixeQPWfxgvhloTb80_StghxSq8qOKwDO4W2GeVEsaANRSamk8yQZBypfmB741qVo2tAldFKgP0B6RXLsrJFTYBZbu4SGX5xp50HHxsvM7_k5KEX_QaosX-eSBl9BGhSLttDcHGe1eHi2K4-wOAyUdV4fzii9NcW5ag3kj1FhBUKxKSx3-iuulpxo9OtJXjMFputolTDpcjj-QvR93204cYtumypmp0-7NEzDmbu89-8ar9IaIOxLnCePsdFO0mNbKmeV397hwRCFDSyDGTGX0vmIBNwejdmJHso3dOnjqgQI8R1Hskkvfr_mh28U3NQ0oq68bQuzF5mxVTTRHoQnd0KqKhnZL3i_uyIpElJhm3GhPIY0gjw5nufUw3tehfj03LzcgCeZLHmNE0UZ-eiMOSzwZzAE3x0QfhMjYvXCN5Uvwy82Ls890sGAoDzqye9YBRzC5GRZm2FKz3Id0IWBJ-MzwOKEawOJQObtPFCRa9T-xt7j1sdKuTX2Pn9Z4KAdwVstpCNOtvDLw3Wvr6Gk3afLZ_thrRRJskrNPXSSotG4lZavxtfW7TTFjTr-568_wnJP22gU9-9OKpv8ZnS0WqN6wiweB-gtMlR7WpHtmdbmaYt4GzGs-dspVOxUvLpKLaBrb47rFMSH5S8-ZncAxvv6Ep41FlzL7DGodT_7CeAGq1GaGOKcuPOQyF9eDOTNPNmN8KDx1z9e5_QwSBGhyJIWVLPlzQgjjjfWuO6ETzdNllsUSNvGDvzuhRmFmSfEE-3hmgWsk6j9lfdDFNNyf76vtBS1ueRabflKQuEY_dp0y7MhO-ooJdUzbw6XbPRQmz3ys0YRk8vV-BWOTJh3BnSulZBwviyBYGbh96ny_iBlTrREIgRhBVba3hWUaT7o-DE2xkXJwFPlvJfWy7DVN78IbD1GvY7gF1P988-_mO-pLhYt-FEW8KTo3M6adSc-NCpOK5UP_6_ymmpIt30pfrLRv6nr-Th2dcFhEaLjl5j6cmnxeznKerr9fcpR6O3byVtHYw0Vb66vw3Ck3dBGM4bMjHEr6I60gb3ZjbrE56kkTmoxy-uNGYTSqDsFoUyKaFdr0GFT_6CSJhed-FHQ2ERzKPu7E833Bgj1g8t-IxgLgc2BYosfiDV87wMQRzfGwuzqNA1kJtwJPx-VtwKe3o6RpoxcRM0i_lCx-NLlrh4ZM2C--H5lqCqhEKYmfFG1cJh1PsKrDQ82zUNvibdpRpvxFZialRTn0l17QOW-_0DbObl83yFRFePQaOvJmojdq004td8K6e1aj1pLADvRwWQtPZW5R0wg6ZpBA1JFUGXqX8z__R_WX4psQgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcxMjgwOTY2MywiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9',
        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=3248e35a-71e9-4253-a6f1-00aec7762b71&groupId=0df8bc11-782f-4f40-ab96-a702f98fc657&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d'
    };

    var report = powerbi.embed(reportContainer, reportLoadConfig);
    //Clear
    reportLoadConfig = { };

    report.off("loaded");
    report.on("loaded", function () {
        console.log("Report load successful");
    });

    report.off("rendered");
    report.on("rendered", function () {
        console.log("Report render successful");
    })

    report.off("error");
    report.on("error", function (event) {
        var errorMsg = event.detail;
    
        console.error(errorMsg);
        return;
    });
}