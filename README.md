# 🚀 ImSynioxR Portfolio Website

Modern, siyah-kırmızı temalı Full Stack developer portfolyo sitesi. React, FastAPI ve MongoDB kullanılarak geliştirilmiştir.

![Portfolio Preview](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.110.1-009688?style=for-the-badge&logo=fastapi)
![MongoDB](https://img.shields.io/badge/MongoDB-4.5.0-47A248?style=for-the-badge&logo=mongodb)

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Gereksinimler](#-gereksinimler)
- [Kurulum](#-kurulum)
- [Çalıştırma](#-çalıştırma)
- [Proje Yapısı](#-proje-yapısı)
- [Özelleştirme](#-özelleştirme)
- [Sorun Giderme](#-sorun-giderme)
- [Katkıda Bulunma](#-katkıda-bulunma)

---

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Siyah-kırmızı tema ile şık ve profesyonel görünüm
- 📱 **Responsive**: Mobil, tablet ve masaüstü uyumlu
- ⚡ **Hızlı**: React ve FastAPI ile optimize edilmiş performans
- 🎭 **Animasyonlar**: Smooth geçişler ve hover efektleri
- 🗂️ **Proje Galerisi**: Çalışmalarınızı sergilemek için modern kart tasarımı
- 📧 **İletişim Bölümü**: Discord, Email, GitHub entegrasyonu
- 🔒 **Güvenli**: CORS koruması ve environment variables

---

## 🛠️ Gereksinimler

Projeyi çalıştırmadan önce sisteminizde şunların kurulu olması gerekir:

### Frontend İçin:
- **Node.js** (v18.0.0 veya üzeri) - [İndir](https://nodejs.org/)
- **Yarn** package manager - [İndir](https://yarnpkg.com/)

### Backend İçin:
- **Python** (v3.9 veya üzeri) - [İndir](https://www.python.org/)
- **MongoDB** (v4.4 veya üzeri) - [İndir](https://www.mongodb.com/try/download/community)

### Opsiyonel:
- **Git** - [İndir](https://git-scm.com/)
- **MongoDB Compass** - GUI için [İndir](https://www.mongodb.com/products/compass)

---

## 📥 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/S2GTRSAD/portfolio.git
cd portfolio
```

### 2. Frontend Kurulumu

```bash
# Frontend dizinine gidin
cd frontend

# Bağımlılıkları yükleyin
yarn install

# .env dosyasını kontrol edin (zaten mevcut)
# REACT_APP_BACKEND_URL=http://localhost:8001
```

**Not**: `frontend/.env` dosyası repository'de mevcut, ancak üretim ortamı için değiştirmeniz gerekebilir.

### 3. Backend Kurulumu

```bash
# Backend dizinine gidin (proje kök dizininden)
cd ../backend

# Virtual environment oluşturun (önerilen)
python -m venv venv

# Virtual environment'ı aktifleştirin
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Bağımlılıkları yükleyin
pip install -r requirements.txt
```

### 4. MongoDB Kurulumu

#### Yerel MongoDB (Önerilen - Kolay):

**Windows:**
1. MongoDB Community Server'ı indirin ve kurun
2. MongoDB servisini başlatın:
   ```bash
   net start MongoDB
   ```

**macOS (Homebrew ile):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### MongoDB Atlas (Cloud - Alternatif):

1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)'ta ücretsiz hesap oluşturun
2. Yeni bir cluster oluşturun
3. Database user oluşturun
4. IP adresinizi whitelist'e ekleyin
5. Connection string'i kopyalayın

### 5. Environment Variables Ayarları

Backend için `.env` dosyasını düzenleyin:

```bash
cd backend
# .env dosyasını açın ve düzenleyin
```

**backend/.env** içeriği:
```env
# MongoDB bağlantı URL'i
# Yerel MongoDB için:
MONGO_URL=mongodb://localhost:27017

# MongoDB Atlas için (örnek):
# MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority

# Database adı
DB_NAME=portfolio_db
```

---

## 🚀 Çalıştırma

### Seçenek 1: Manuel Başlatma (Önerilen - Geliştirme)

İki ayrı terminal penceresi açın:

**Terminal 1 - Backend:**
```bash
cd backend

# Virtual environment'ı aktifleştirin (eğer deaktif ise)
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate

# Backend'i başlatın
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Backend şu adreste çalışacak: `http://localhost:8001`

**Terminal 2 - Frontend:**
```bash
cd frontend

# Frontend'i başlatın
yarn start
```

Frontend şu adreste açılacak: `http://localhost:3000`

### Seçenek 2: Production Build

**Frontend için:**
```bash
cd frontend
yarn build
# Build dosyaları 'build' klasöründe oluşacak
```

**Backend için:**
```bash
cd backend
# Production modda çalıştırın (--reload olmadan)
uvicorn server:app --host 0.0.0.0 --port 8001
```

---

## 📁 Proje Yapısı

```
portfolio/
│
├── frontend/                  # React Frontend
│   ├── public/               # Static dosyalar
│   ├── src/
│   │   ├── components/       # React bileşenleri
│   │   │   ├── Navbar.jsx   # Navigation bar
│   │   │   ├── Hero.jsx     # Ana sayfa hero section
│   │   │   ├── Projects.jsx # Projeler galerisi
│   │   │   ├── About.jsx    # Hakkımda bölümü
│   │   │   ├── Contact.jsx  # İletişim bölümü
│   │   │   ├── Footer.jsx   # Footer
│   │   │   └── ui/          # Shadcn UI bileşenleri
│   │   ├── data/
│   │   │   └── mock.js      # Mock data (geliştirme için)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility fonksiyonlar
│   │   ├── App.js           # Ana uygulama
│   │   ├── App.css          # Global stiller
│   │   └── index.js         # Giriş noktası
│   ├── .env                 # Environment variables
│   ├── package.json         # NPM bağımlılıkları
│   └── tailwind.config.js   # Tailwind ayarları
│
├── backend/                  # FastAPI Backend
│   ├── server.py            # Ana API servisi
│   ├── requirements.txt     # Python bağımlılıkları
│   └── .env                 # Backend environment variables
│
└── README.md                # Bu dosya
```

---

## 🎨 Özelleştirme

### 1. Renk Teması Değiştirme

`frontend/src/App.css` ve Tailwind sınıflarını düzenleyin:

```css
/* Mevcut: Siyah-Kırmızı */
--primary-bg: #000000;
--primary-accent: #dc2626;

/* İstediğiniz renklerle değiştirin */
```

### 2. İçerik Güncelleme

`frontend/src/data/mock.js` dosyasını düzenleyin:

```javascript
export const heroData = {
  name: "Sizin Adınız",
  title: "Sizin Unvanınız",
  // ...
};
```

### 3. Projeler Ekleme/Düzenleme

`mock.js` içindeki `projectsData` array'ini güncelleyin:

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Proje Adı",
    description: "Proje açıklaması",
    image: "resim_url",
    tags: ["React", "Node.js"],
    type: "image"
  },
  // Daha fazla proje ekleyin...
];
```

### 4. İletişim Bilgileri

`mock.js` içindeki `contactData`'yı güncelleyin:

```javascript
export const contactData = {
  discord: "sizin_discord",
  email: "sizin@email.com",
  github: "sizin_github",
  location: "Şehir, Ülke"
};
```

---

## 🔧 Sorun Giderme

### Frontend çalışmıyor

**Hata: "Port 3000 is already in use"**
```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMARASI> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**Hata: "Module not found"**
```bash
# node_modules'ü temizleyin ve tekrar yükleyin
rm -rf node_modules
yarn cache clean
yarn install
```

### Backend çalışmıyor

**Hata: "MongoDB connection failed"**
- MongoDB servisinin çalıştığından emin olun:
  ```bash
  # Windows:
  net start MongoDB
  
  # macOS/Linux:
  sudo systemctl status mongodb
  ```
- `.env` dosyasındaki `MONGO_URL`'i kontrol edin

**Hata: "Port 8001 is already in use"**
```bash
# Windows:
netstat -ano | findstr :8001
taskkill /PID <PID_NUMARASI> /F

# macOS/Linux:
lsof -ti:8001 | xargs kill -9
```

**Hata: "Module 'XXX' not found"**
```bash
# Requirements'ı tekrar yükleyin
pip install -r requirements.txt
```

### CORS Hataları

Backend'de CORS ayarları yapılmış durumda, ancak sorun yaşarsanız `server.py` dosyasında `allow_origins` listesini kontrol edin.

---

## 🌐 Deployment

### Frontend (Vercel - Önerilen)

1. [Vercel](https://vercel.com)'e kaydolun
2. GitHub repository'nizi bağlayın
3. Environment variables ekleyin:
   - `REACT_APP_BACKEND_URL`: Backend URL'iniz
4. Deploy!

### Backend (Render/Railway)

1. Platform seçin: [Render](https://render.com) veya [Railway](https://railway.app)
2. Repository'yi bağlayın
3. Environment variables ekleyin:
   - `MONGO_URL`: MongoDB bağlantı stringi
   - `DB_NAME`: Database adı
4. Deploy!

### MongoDB (MongoDB Atlas)

Üretim için MongoDB Atlas kullanmanız önerilir (ücretsiz tier mevcut).

---

## 📝 API Endpoints

Backend şu endpoint'leri sunar:

- `GET /api/` - Health check
- `GET /api/status` - Tüm status kayıtlarını getir
- `POST /api/status` - Yeni status kaydı oluştur

**Not**: Şu anda backend basit bir örnek. Gerçek proje API'leri için genişletilmesi gerekir.

---

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje kişisel kullanım için açık kaynaklıdır.

---

## 📞 İletişim

**ImSynioxR**
- Discord: syniox38
- GitHub: [@S2GTRSAD](https://github.com/S2GTRSAD)
- Email: contact@imsynioxr.dev

---

## 🙏 Teşekkürler

- [React](https://reactjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**
