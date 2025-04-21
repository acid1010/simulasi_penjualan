import React, { useState } from 'react';
import './App.css';
const formatRupiah = (value) => {
  if (!value) return '0';
  return Math.round(value).toLocaleString('id-ID');
};

const parseInput = (formattedValue) => {
  return Number(formattedValue.replace(/\./g, ''));
};

const SimulasiPenjualan = () => {
  const [investasi, setInvestasi] = useState(5000000);
  const [omsetHarian, setOmsetHarian] = useState(300000);

  // Perhitungan
  const labaHarian = omsetHarian * 0.37;
  const omsetBulanan = omsetHarian * 30;
  const labaBulanan = labaHarian * 30;
  const opHarian = 85000;
  const opBulanan = opHarian * 30;

  const netProfitHarian = labaHarian - opHarian;
  const netProfitBulanan = labaBulanan - opBulanan;

  const sharingDivisiHarian = netProfitHarian * 0.6;
  const sharingPendanaHarian = investasi / 11450000 * netProfitHarian * 0.4;
  const sharingDivisiBulanan = netProfitBulanan * 0.6;
  const sharingPendanaBulanan = investasi / 11450000 * netProfitBulanan * 0.4;

  const totalReturn6Bulan = sharingPendanaBulanan * 6;
  const totalReturn12Bulan = sharingPendanaBulanan * 12;

  const roi6Bulan = investasi + totalReturn6Bulan;
  const roi12Bulan = investasi + totalReturn12Bulan;

  const getBgClass = (value) => value < 0 ? 'bg-red-100 text-red-700' : '';
  const getTextColor = (value) => value < 0 ? 'text-red-700' : 'text-green-600';

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Simulasi Penjualan & ROI</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Nilai Investasi</label>
          <input
            type="text"
            value={formatRupiah(investasi)}
            onChange={(e) => setInvestasi(parseInput(e.target.value))}
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Omset Harian</label>
          <input
            type="text"
            value={formatRupiah(omsetHarian)}
            onChange={(e) => setOmsetHarian(parseInput(e.target.value))}
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      <table className="w-full mt-4 border text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Keterangan</th>
            <th className="p-2 border">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2 border">Laba Harian (37%)</td><td className="p-2 border">Rp {formatRupiah(labaHarian)}</td></tr>
          <tr><td className="p-2 border">Omset Bulanan</td><td className="p-2 border">Rp {formatRupiah(omsetBulanan)}</td></tr>
          <tr><td className="p-2 border">Laba Bulanan</td><td className="p-2 border">Rp {formatRupiah(labaBulanan)}</td></tr>
          <tr><td className="p-2 border">Biaya Operasional Harian</td><td className="p-2 border">Rp {formatRupiah(opHarian)}</td></tr>
          <tr><td className="p-2 border">Biaya Operasional Bulanan</td><td className="p-2 border">Rp {formatRupiah(opBulanan)}</td></tr>
          <tr className={getBgClass(netProfitHarian)}><td className="p-2 border font-semibold">Net Profit Harian</td><td className="p-2 border">Rp {formatRupiah(netProfitHarian)}</td></tr>
          <tr className={getBgClass(netProfitBulanan)}><td className="p-2 border font-semibold">Net Profit Bulanan</td><td className="p-2 border">Rp {formatRupiah(netProfitBulanan)}</td></tr>
          <tr><td className="p-2 border">Sharing Divisi (Harian)</td><td className="p-2 border">Rp {formatRupiah(sharingDivisiHarian)}</td></tr>
          <tr><td className="p-2 border">Sharing Pendana (Harian)</td><td className="p-2 border">Rp {formatRupiah(sharingPendanaHarian)}</td></tr>
          <tr><td className="p-2 border">Sharing Pendana (Bulanan)</td><td className="p-2 border">Rp {formatRupiah(sharingPendanaBulanan)}</td></tr>
          <tr><td className="p-2 border">Total Return 6 Bulan</td><td className="p-2 border">Rp {formatRupiah(totalReturn6Bulan)}</td></tr>
          <tr><td className="p-2 border">Total Return 12 Bulan</td><td className="p-2 border">Rp {formatRupiah(totalReturn12Bulan)}</td></tr>
          <tr className={`font-bold bg-gray-50 ${getBgClass(roi6Bulan - investasi)}`}>
            <td className="p-2 border">Total ROI 6 Bulan</td>
            <td className={`p-2 border ${getTextColor(roi6Bulan - investasi)}`}>Rp {formatRupiah(roi6Bulan)}</td>
          </tr>
          <tr className={`font-bold bg-gray-50 ${getBgClass(roi12Bulan - investasi)}`}>
            <td className="p-2 border">Total ROI 12 Bulan</td>
            <td className={`p-2 border ${getTextColor(roi12Bulan - investasi)}`}>Rp {formatRupiah(roi12Bulan)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SimulasiPenjualan;

