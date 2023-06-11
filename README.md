![alt text](https://i.imgur.com/JPlSC6Y.png)

**HaikuMaker**
=====================================

A site to create instant haikus using chatGPT.

[https://haiku-maker-8dou8k2xk-denyosaur.vercel.app/](https://haiku-maker-8dou8k2xk-denyosaur.vercel.app/)

*NOTE: [Github reposiory](https://github.com/denyosaur/haiku-maker)

**Purpose**
---------------

I developed this project to utilize chatGPT to create haikus. The project is build with TypeScript and Next.js. 

**Features**
---------------
- Uses the new experimental AppDir feature from Next.js 13.
- Implements server side rendering for faster load times on client with Next.js. 
- Uses Sanity for headless CMS. With Sanity, the content update is handled directly on the domain with pathname `/studio` using a Github login. In the production environment, changes on the CMS is updated once a day by Next.js to reduce server load on Sanity. 

**Installation Steps**
---------------
1. Clone this repo using `git clone https://github.com/denyosaur/haiku-maker.git`
2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 
            
**Tech Stack**
---------------
- next - v13.4.4
- react - v18.2.0
- sanity - v3.11.5
- tailwindcss - v3.3.2
- typescript - 5.1.3
- @sanity/image-url - v1.0.2
- @sanity/client - v6.1.2