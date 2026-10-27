import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

const fmtDate = (iso) =>
  new Date(iso).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });

const MAROON = [128, 0, 32];

function header(doc, title, subtitle) {
  const w = doc.internal.pageSize.getWidth();
  doc.setFillColor(...MAROON);
  doc.rect(0, 0, w, 28, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Noor Virtual Academy", 14, 13);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(title, 14, 21);
  if (subtitle) doc.text(subtitle, w - 14, 21, { align: "right" });
  doc.setTextColor(40, 40, 40);
}

function footer(doc) {
  const total = doc.getNumberOfPages();
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(120);
    doc.text(`Page ${i} of ${total}`, w / 2, h - 8, { align: "center" });
  }
}

/** All admissions - A4 landscape table */
export function downloadAllAdmissionsPDF(list) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  header(doc, "Admission Applications", `Total: ${list.length}`);

  autoTable(doc, {
    startY: 34,
    head: [["#", "Student", "Guardian", "Relation", "Email", "WhatsApp", "Applying For", "Days", "Date"]],
    body: list.map((a, i) => [
      i + 1, a.studentName, a.guardianName, a.guardianRelation, a.email,
      a.whatsapp, a.applyFor, a.days.join(", "), fmtDate(a.createdAt),
    ]),
    styles: { fontSize: 8, cellPadding: 2, valign: "middle" },
    headStyles: { fillColor: MAROON, textColor: 255 },
    alternateRowStyles: { fillColor: [253, 247, 238] },
    columnStyles: { 0: { cellWidth: 8 }, 7: { cellWidth: 45 }, 8: { cellWidth: 28 } },
  });

  footer(doc);
  doc.save("NVA-admissions.pdf");
}

/** One admission - A4 portrait */
export function downloadSingleAdmissionPDF(a) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  header(doc, "Admission Application", fmtDate(a.createdAt));

  autoTable(doc, {
    startY: 38,
    theme: "grid",
    body: [
      ["Student Name", a.studentName],
      ["Guardian Name", a.guardianName],
      ["Guardian Relation", a.guardianRelation],
      ["Email", a.email],
      ["WhatsApp Number", a.whatsapp],
      ["Applying For", a.applyFor],
      ["Preferred Days", a.days.join(", ")],
      ["Submitted On", fmtDate(a.createdAt)],
    ],
    styles: { fontSize: 11, cellPadding: 4 },
    columnStyles: {
      0: { fontStyle: "bold", cellWidth: 55, fillColor: [248, 239, 225] },
    },
  });

  footer(doc);
  doc.save(`NVA-admission-${a.studentName.replace(/\s+/g, "-")}.pdf`);
}
