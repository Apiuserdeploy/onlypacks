"use client"



export default async function page() {
    const amazonlink = "//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=02482-20&language=es_US&marketplace=amazon&region=US&placement=B07HZ4N76W&asins=B07HZ4N76W&linkId=6ea91095e7b21304a595e5497ac74141&show_border=true&link_opens_in_new_window=true&rel=nofollow";

    return (
        <div>
            
            <iframe
                sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
                style={{ width: "200px", height: "240px" }}
                marginWidth={0}
                marginHeight={0}
                scrolling="no"
                frameBorder={0}
                src={amazonlink}
            />

        </div>
    )
}
