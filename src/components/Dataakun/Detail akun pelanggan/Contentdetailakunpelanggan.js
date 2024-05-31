import React from "react";
import { Card } from "react-bootstrap";
import Contentpesananyangdipesan from "../Contentpesananyangdipesan";

function Contentdetailakunpelanggan() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Akun (Jhon Doe 1)</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Detail akun pelanggan</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="bi bi-geo-alt-fill"></i> Informasi Pelanggan
            </Card.Title>
            <p style={{ marginBottom: "4px" }} className="text-muted">
              Jhon Doe 2
            </p>
            <p style={{ marginBottom: "4px" }} className="text-muted">
              JhonDoe2@gmail.com
            </p>
            <p style={{ marginBottom: "4px" }} className="text-muted">
              081213133187
            </p>
            <p className="text-muted">
              Jl. Mangga BesarSikep, Keboansikep, Kec. Gedangan, Kabupaten
              Sidoarjo, Jawa Timur 61254
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="bi bi-person-lines-fill me-2"></i> Informasi Akun
            </Card.Title>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "-10px" }}
            >
              <p className="text-muted">Waktu Registrasi</p>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                2023-06-21 12:20
              </p>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "-10px" }}
            >
              <p className="text-muted">Terakhir Login</p>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                2023-06-21 22:20
              </p>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "-10px" }}
            >
              <p className="text-muted">Produk Yang Dibeli (Lunas)</p>
              <p className="text-end text-muted" style={{ fontSize: "0.9rem" }}>
                10 Produk
              </p>
            </div>
          
          </Card.Body>
        </Card>

        <Contentpesananyangdipesan />
      </section>
    </div>
  );
}

export default Contentdetailakunpelanggan;