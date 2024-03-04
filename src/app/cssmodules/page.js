import custom from "./custom.module.css";
import page from "@/app/page.module.css"
export default function CssModeules()
{
    return(
        <>
        <h2 className={page.content}>Using same (name) class used in page.module.css file</h2>
        <h2 className={custom.content}>Using same (name) class used in custom.module.css file</h2>
        </>
    )
}