import "./login.css";
import Link from "next/link";
export default function LoginLayout({children}){
    return(
<>
<ul>
  <li><Link className="active" href="/">Home</Link></li>
  <li><Link href="/login/loginteacher">Teacher Login</Link></li>
  <li><Link href="/login/loginstudent">Student Login</Link></li>
  <li><Link href="/login">Main Login page</Link></li>
 
</ul>
{children}
</>
    )
}