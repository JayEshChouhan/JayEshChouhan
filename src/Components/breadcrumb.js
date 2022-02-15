import { Link } from "react-router-dom";

export default function Mybreadcrumb(prop){
  let url = window.location.pathname;
  const urlPaths = url.split("/");
  return (
    <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
        <div class="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="/">Home</Link></li>
              {urlPaths.slice(1,(urlPaths.length-1)).map(
                (urlPath)=>{
                  return <li class="breadcrumb-item"><Link to={"/"+urlPath}>{urlPath}</Link></li>
                }
              )
              }
              <li className="breadcrumb-item active" aria-current="page">{urlPaths[urlPaths.length-1]}</li>
            </ol>
        </div>
    </nav>
  );
};