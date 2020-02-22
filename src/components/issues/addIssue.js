import React from "react";

export default function() {
  return (
    <div
      style={{
        padding: 40,
        backgroundColor: "white",
        marginTop: 135,
        marginBottom: 20,
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 10,
        boxShadow: "10px 10px 10px 6px #9E9E9E"
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>إضافة قضية</h1>
      <hr
        style={{
          color: "black",
          // backgroundColor: 'black',
          height: 5
        }}
      />
      <div>
        <div className="row">
          <div
            className="col-lg col-sm"
            style={{
              display: "inline-block",
              borderRight: "1px solid #ccc",
              margin: "0 10px",
              fontWeight: "bold"
            }}
          >
            <div
              className="form-group row"
              style={{ float: "right", marginRight: "0.1%" }}
            >
              <h3 style={{ fontWeight: "bold" }}>:الخصم</h3>
            </div>
          </div>

          <div
            className="col-lg col-sm"
            style={{ textAlign: "right", fontWeight: "bold" }}
          >
            <div
              className="form-group row"
              style={{
                // float: "right",
                marginRight: "0.1%"
              }}
            >
              <div className="col-lg-12 col-sm-12" >
                <h3 style={{ fontWeight: "bold" }}>:الموكل</h3>
              </div>
            </div>
            <div className="form-group row" >
              <div className="col-lg-4 col-md-4">
                  <input style={{ textAlign: "right" }} disabled type="text" placeholder="أدخل نوع الموكل" class="form-control" />
              </div>
              <div className="col-lg-4 col-md-4">
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>آخر</option>
                  <option value="1">شركة</option>
                  <option value="2">فرد</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-2">
                <label style={{ fontWeight: "bold" }}>: نوع الموكل </label>
              </div>
            </div>
            <div className="form-group row" >
              <div className="col-lg-4 col-md-4">
                  <input style={{ textAlign: "right" }} disabled type="text" placeholder="أدخل اسم الموكل" class="form-control" />
              </div>
              <div className="col-lg-4 col-md-4">
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>آخر</option>
                  <option value="1"> شركة فلان الفلاني</option>
                  <option value="2">شركة فلان الفلاني</option>
                  <option value="3">شركة فلان الفلاني</option>
                  <option value="4">شركة فلان الفلاني</option>
                </select>
              </div>
              <div
                className="col-lg-2 col-md-2"
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                <label style={{ fontWeight: "bold" }}>: اسم الموكل </label>
              </div>
            </div>
            <div className="form-group row" style={{ textAlign: "right" }}>
              <div className="col-lg-4 col-md-4">
                  <input style={{ textAlign: "right" }} disabled type="text" placeholder="أدخل صفته بالدعوى" class="form-control" />
              </div>
              <div className="col-lg-4 col-md-4">
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>آخر</option>
                  <option value="1"> مدعي</option>
                  <option value="2">مدعى عليه</option>
                  <option value="3">آخر</option>
                  <option value="4">شاهد</option>
                </select>
              </div>
              <div
                className="col-lg-2 col-md-2"
                style={{ textAlign: "right", fontWeight: "bold" }}
              >
                <label style={{ fontWeight: "bold" }}>: صفته بالدعوى </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg col-sm">
            <hr
              style={{
                color: "black",
                height: 5
              }}
            />
            <h3 style={{ textAlign: "right", fontWeight: "bold" }}>
              :تفاصيل الدعوى
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
