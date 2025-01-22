import React, { useState, useEffect } from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const ReactExcelDownload = () => {
    const [data, setData] = useState([]);
    const fileName = "product_data";

    useEffect(() => {
        fetch("http://192.168.0.48:18080/api/excel/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleDownload = () => {
        if (data.length === 0) {
            alert("No data to export!");
            return;
        }
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };

    return (
        <div>
            <h1>Excel Download</h1>
            <button onClick={handleDownload}>
                엑셀 저장
            </button>
            {data.length === 0 ? (
                <p>Loading or no data available...</p>
            ) : (
                <p>Data loaded: {data.length} items</p>
            )}
        </div>
    );
};

export default ReactExcelDownload;
