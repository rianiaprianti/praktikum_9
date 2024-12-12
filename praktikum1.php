<?php
class Person{
    public $nama;
    public $alamat;
    public $jurusan;

    public function __construct($nama, $alamat, $jurusan) {
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan;
    }
    public function cetak ($nama, $alamat, $jurusan) {
       echo 'Nama:', $this-> $nama;
       echo 'Alamat:', $this-> $alamat;
        echo 'Jurusan:', $this-> $jurusan;
    }
}
?>
