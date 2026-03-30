# 🔐 Auth System (DDD Monolith)

Modern web teknolojileri kullanılarak geliştirilmiş, güvenli ve ölçeklenebilir bir **Authentication & Session Management sistemi**.

Bu proje, **Domain-Driven Design (DDD)** prensiplerine uygun şekilde tasarlanmış **monolitik bir backend mimarisi örneğidir**.

---

## 🚀 Features

- 🔐 Secure Authentication (JWT - jose)
- 🧂 Strong Password Hashing (Argon2)
- 🛡️ CSRF & CORS Protection
- 🚦 Memory-based Rate Limiting
- 🧱 Clean Architecture + DDD
- ⚡ Prisma ORM ile güçlü veri yönetimi

---

## 🏗️ Tech Stack

**Backend**
- Node.js
- Express.js
- Prisma ORM

**Database**
- MySQL

**Security**
- Argon2
- JWT (jose)
- CSRF Protection
- Rate Limiting

---

## ⚙️ Setup

### 1. Environment Variables

Create a `.env` file:

```env
PORT=

DATABASE_URL=

JWT_SECRET=

DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
DATABASE_HOST=
DATABASE_PORT=

NODE_ENV=

### 2️⃣ Yerel Çalıştırma

# Bağımlılıkları yükleyin  
npm install  

# Veritabanı şemasını oluşturun  
npx prisma generate  
npx prisma db push  

# Geliştirme modunda başlatın  
npm run dev  

### 3️⃣ Docker ile Çalıştırma

docker-compose up -d  

---

📂 Project Structure (DDD)

src/
 ├── domain/
 ├── application/
 ├── infrastructure/
 └── interfaces/

---

## 🛡️ Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.  
Bu, projenin ticari veya kişisel amaçlarla özgürce kullanılabileceği, kopyalanabileceği ve değiştirilebileceği anlamına gelir; ancak orijinal yazarın belirtilmesi zorunludur.

---

## ⚠️ Önemli Not / Sorumluluk Reddi

Bu proje sadece teknik bir araç olarak geliştirilmiştir.  
Projeyi kullanırken meydana gelebilecek hatalı, kötü niyetli veya yasadışı kullanımlardan projenin orijinal yazarı/geliştiricisi sorumlu tutulamaz.  
Kullanıcılar, projeyi kendi sorumlulukları altında kullanmayı kabul etmiş sayılır.

---

## 📧 İletişim

Geliştirici: Ramazan Özkan  
E-posta: officallozkan@gmail.com  
GitHub: [@ozkan00offical](https://github.com/ozkan00offical)
