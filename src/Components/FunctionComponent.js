import React from "react";

//

export default function FunctionComponent() {
   //Lệnh return chứa giao diện của thẻ. Lưu ý giao diện của thẻ phải được bao ph3u bởi 1 thẻ duy nhất, thường là thẻ div
   return (
      <div className="p-2 bg-dark text-white m-2">
         <div classname="text-white display-4">Title</div>
         <div>content content content content content</div>
      </div>
   );
}
