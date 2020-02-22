import React from "react";
import { MDBDataTable } from "mdbreact";
import "./style.css";
const Issues = () => {
  const data = {
    columns: [
      {
        label: <h4>المحكمة</h4>,
        field: "Court",
        sort: "asc",
        width: 50
      },
      {
        label: <h4>موضوع الدعوى</h4>,
        field: "Subject",
        sort: "asc",
        width: 50
      },
      {
        label: <h4>صفته بالدعوى</h4>,
        field: "OpponentsDescription",
        sort: "asc",
        width: 10
      },
      {
        label: <h4>الخصم</h4>,
        field: "OpponentsName",
        sort: "asc",
        width: 50
      },
      {
        label: <h4>عنوان الموكل</h4>,
        field: "ClientsAddress",
        sort: "asc",
        width: 100
      },
      {
        label: <h4>صفته بالدعوى</h4>,
        field: "ClientsDescription",
        sort: "asc",
        width: 10
      },
      {
        label: <h4>أسم الموكل</h4>,
        field: "clientsName",
        sort: "asc",
        width: 50
      },
      {
        label: <h4>رقم القضية</h4>,
        field: "LawcaseID",
        sort: "asc",
        width: 20
      },
      {
        label: <h4>#</h4>,
        field: "ID",
        sort: "asc",
        width: 20
      }
    ],
    rows: [
      {
        Court: "المحكمة التجارية",
        Subject: "دعوى مالية",
        OpponentsDescription: "مدعي",
        OpponentsName: "محمد العلي",
        ClientsAddress: "الدمام",
        ClientsDescription: "مدعى عليه",
        clientsName: "كامل اليس",
        LawcaseID: "515841",
        ID: 1,
        clickEvent: data => {
          console.log(data);
        }
      },
      {
        Court: "المحكمة العامة",
        Subject: "دعوى مالية",
        OpponentsDescription: "مدعى عليه",
        OpponentsName: "خالد جميل",
        ClientsAddress: "الرياض",
        ClientsDescription: "مدعي",
        clientsName: "ياسين العلي",
        LawcaseID: "31655",
        ID: 2
      },
      {
        Court: "المحكمة التنفيذية",
        Subject: "دعوى بطلان عقد",
        OpponentsDescription: "مدعى عليه",
        OpponentsName: "عبد العزيز الحسن",
        ClientsAddress: "الرياض",
        ClientsDescription: "مدعي",
        clientsName: "احمد خالد",
        LawcaseID: "7846",
        ID: 3
      },
      {
        Court: "المحكمة التجارية",
        Subject: "دعوى مالية   150000   ريال",
        OpponentsDescription: " مدعى عليه ",
        OpponentsName: "قمر بمي",
        ClientsAddress: "جدة",
        ClientsDescription: "مدعي",
        clientsName: "عبدالله سامر",
        LawcaseID: "22289",
        ID: 4
      },
      {
        Court: "المحكمة التجارية",
        Subject: "دعوى مالية باجرة عقار",
        OpponentsDescription: " مدعى عليه ",
        OpponentsName: "ياسر محمد",
        ClientsAddress: "جدة",
        ClientsDescription: "مدعي",
        clientsName: "شركة القاضي ",
        LawcaseID: "72366",
        ID: 5
      },
      {
        Court: "المحكمة التجارية",
        Subject: "دعوى مالية",
        OpponentsDescription: " مدعي ",
        OpponentsName: "تركي حسن",
        ClientsAddress: "جدة",
        ClientsDescription: "مدعى عليه",
        clientsName: "محمد جاسم ",
        LawcaseID: "8745",
        ID: 6
      },
      {
        Court: "المحكمة التجارية",
        Subject: " دعوى شراكة",
        OpponentsDescription: " مدعى عليه ",
        OpponentsName: "شركة الحلول القصوى",
        ClientsAddress: "جدة",
        ClientsDescription: "مدعي",
        clientsName: "مؤسسة اليفيس ",
        LawcaseID: "123588",
        ID: 7
      },
      {
        Court: "المحكمة التنفيذية",
        Subject: "دعوى وقف",
        OpponentsDescription: "مدعى عليه",
        OpponentsName: "عبد العزيز الحسن",
        ClientsAddress: "الرياض",
        ClientsDescription: "مدعي",
        clientsName: "احمد خالد",
        LawcaseID: "871545",
        ID: 8
      },
      {
        Court: "المحكمة التجارية",
        Subject: "دعوى حوالة",
        OpponentsDescription: "مدعي",
        OpponentsName: "احمد بارودي",
        ClientsAddress: "الرياض",
        ClientsDescription: "مدعى عليه",
        clientsName: " وائل العلي",
        LawcaseID: "8484",
        ID: 9
      },
      {
        Court: "المحكمة التجارية",
        Subject: "دعوى حوالة",
        OpponentsDescription: "مدعى عليه",
        OpponentsName: "موسى عبدالله",
        ClientsAddress: "الرياض",
        ClientsDescription: "مدعي",
        clientsName: "محمد غانم",
        LawcaseID: "8484",
        ID: 10
      }
      
    ]
  };

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
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        القضـــايا
      </h1>
      <hr
        style={{
          color: "black",
          // backgroundColor: 'black',
          height: 5
        }}
      />
      <MDBDataTable
        style={{ textAlign: "center" }}
        striped
        responsiveSm
        responsiveMd
        responsiveLg
        theadColor="dark"
        bordered
        // small
        // barReverse
        searchLabel="ابحث"
        className="text-right"
        pagination
        entries={9}
        entriesLabel=""
        // pagesAmount={10}
        paginationLabel={["السابق", "التالي"]}
        info={false}
        // autoWidth
        hover
        paging={true}
        data={data}
      />
    </div>
  );
};

export default Issues;
