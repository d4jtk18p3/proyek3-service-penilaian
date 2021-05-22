import express from 'express'
import * as MahasiswaController from '../controller/Nilai'
import * as ValidatorSanitizer from '../middleware/InputValidatorSanitizer'

const router = express.Router()
/*
router.post('/new-mahasiswa', ValidatorSanitizer.postNewMahasiswa, MahasiswaController.postNewMahasiswa)
router.delete('/delete-mahasiswaById/:id_mahasiswa', MahasiswaController.deleteMahasiswabyId)
router.get('/AllMahasiswa', MahasiswaController.getAllMahasiswa)
router.get('/getOne/:NIM', MahasiswaController.getOneMahasiswaByNIM)
router.get('/searchByName/:nama', MahasiswaController.searchMahasiswaByName)
router.get('/searchByNIM/:NIM', MahasiswaController.searchMahasiswaByNIM)
*/

router.post('/new-nilai',)
router.delete('/delete-nilaiByMahasiswa/:id_nilai',)
router.get('/AllNilai',)

export default router