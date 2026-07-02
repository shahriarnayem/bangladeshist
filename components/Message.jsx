export default function Message({type='error',children}){if(!children)return null;return <div className={`alert ${type==='success'?'alert-success':'alert-error'}`}>{children}</div>}
