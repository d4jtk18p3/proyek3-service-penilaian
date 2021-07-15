import * as IndeksPrestasiDAO from '../dao/Indeks_Prestasi'
import * as MahasiswaDAO from '../dao/Mahasiswa'

import expressValidator from 'express-validator/check'
import Studi from '../models/Studi'
const { validationResult } = expressValidator

export const updateIndeksPrestasi = async (req, res, next) => {
  try {
    const dataip_semester = req.body.dataip_semester
    var listip_semester = []
    
    for(var i = 0; i<dataip_semester.length; i++){
      var nim = dataip_semester[i].nim
      const recordip_semester = await IndeksprestasiDAO.updateIndeksPrestasibyMahasiswa(ip_semester,nim)
      listip_semester.push(recordip_semester)
    }

    if (listip_semester === null){
      console.log('gagal update indeks prestasi')
      throw error
    }

    res.status(200).json({
      message: 'update indeks prestasi sukses',
      data: {
        listip_semester
      }
    })
  } catch(error) {
    next(error)
  }
}
export const getIndeksPrestasibyMahasiswa = async (req, res, next) => {
  try {
    const dataip_semester= await IndeksPrestasiDAO.getOneIpBymahasiswa(nim)

    var listip_semester = []
    for(var i = 0; i<dataip_semester.length; i++){
      var mhs = await MahasiswaDAO.findOneMahasiswaByNIM(dataip_semester[i].id_mahasiswa)
      const result = {nim: dataip_semester[i].id_mahasiswa, nama: mhs.nama nilai_akhir: dataip_semester[i].indeks_prestasi}
      listip_semester.push(result)
    }
    
    if (listip_semester === null) {
      console.log('Get indeks prestasi by mahasiswa gagal')
      throw error
    }

    res.status(200).json({
      message: 'Get indeks prestasi by mahasiswa sukses',
      data: {
        listip_semester
      }
    })
  } catch(error) {
    next(error)
  }
}
export const postNewNilaiAkhir = async (req, res, next) => {
  try {
    const {
      ip_semester,
	  nim,
	  semester
    } = req.body
    const error = validationResult(req)

    if (!error.isEmpty()) {
      error.status = 400
      throw error
    }

    const indeksPrestasiInsert = await IndeksPrestasiDAO.insertOneIp(ip_semester,nim,semester)

    if (typeof indeksPrestasiInsert === 'undefined') {
      error.status = 500
      error.message = 'Insert Indeks Prestasi gagal'
      throw error
    }

    res.status(200).json({
      message: 'insert Indeks Prestasi sukses',
      data: {
        indeksPrestasiInsert
      }
    })
  } catch (error) {
    next(error)
  }
}

export const deleteNilaiAkhirbyMaahasiswa = async (req, res, next) => {
  try {
    const ip_semester = req.params.ip_semester
    const result = await NilaiAkhirDAO.deleteNilaiAkhirbyMatkul(nilaiakhirId)
    if (result === 1) {
      res.status(200).json({
        message: 'Delete nilai berhasil',
        data: {
          mahasiswaId
        }
      })
    } else {
      const error = new Error('Delete nilai gagal')
      error.statusCode = 500
      throw error
    }
  } catch (error) {
    next(error)
  }
}

export const getAllNilaiAkhir = async (req, res, next) => {
  try {
    const nilai = await NilaiAkhirDAO.getAllNilaiAkhir()
    res.status(200).json({
      message: 'get all nilai akhir success',
      data: {
        nilai
      }
    })
  } catch (error) {
    next(error)
  }
}

export const updateNilaiAkhirbyMatkul = async (req, res, next) => {
  try {
    const { id_studi } = req.params
    const updateNilaiAkhir = await NilaiAkhirDAO.updateNilaiAkhirbyMatkul(id_studi, req.body.nilai_akhir)
    if (updateNilaiAkhir === 1) {
      const nilai_akhir = await NilaiAkhirDAO.getOneNilaiAkhirbyMatkul(id_studi)
      res.status(200).json({
        message: 'Update Nilai Akhir Mahasiswa berhasil',
        data: {
          nilai_akhir
        }
      })
    } else {
      const error = new Error('Update Nilai Akhir Mahasiswa gagal')
      error.statusCode = 500
      error.cause = 'Update Nilai Akhir Mahasiswa gagal'
      throw error
    }
  } catch (error) {
    next(error)
  }
}

export const getOneNilaiAkhirbyMatkul = async (req, res, next) => {
  try {
    const { id_studi } = req.params
    const nilai_akhir = await NilaiAkhirDAO.getOneNilaiAkhirbyMatkul(id_studi)
    res.status(200).json({
      message: 'get one Nilai Akhir by Markul success',
      data: {
        id_studi
      }
    })
  } catch (error) {
    next(error)
  }
}
