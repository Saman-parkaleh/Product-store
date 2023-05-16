import React from "react";

function Filter(props) {

  return (
    <div>
      <div  className="box-filter flex text-center justify-between bg-sky-400 content-center p-2">
        <div className="mr-3">  تعداد محصول: {props.item.length}محصول   </div>
        <div>
          
          <div>
            <div> مرتب سازس بر اساس</div>
            <label className="mr-5"> جدید ترین محصولات</label>
            <input type="radio" name="btn" value="asc"
            onChange={props.sortproduct}/>
            <label className="mr-5" htmlFor=""> قدیمی ترین محصولات</label>
            <input type="radio" name="btn" value="desc"
             onChange={props.sortproduct}
            />
          </div>
        </div>
        <div>
         <div className="ml-2">برند ها
          <select  value={props.brand}  onChange={props.brandfilter}>
            <option value="">همه</option>
            <option value="samsung">سامسونگ</option>
            <option value="motorola">متورلا</option>
            <option value="iphone">ایفون</option>
            <option value="lg">ال جی </option>
            <option value="blackberry">بلک بری</option>
            <option value="sony">سونی</option>
          </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
