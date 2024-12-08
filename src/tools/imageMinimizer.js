import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

await imagemin(['src/assets/images/*.{jpg,png}'], {
    destination: 'build/images',
    plugins: [imageminWebp({ quality: 50 })],
});
