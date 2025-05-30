/*
Es un archivo especial de Next.js que se ejecuta cuando la página está cargando.
Es útil para mostrar un indicador de carga mientras se cargan los datos.
*/
import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}

/*
Cuando se crea una carpeta usando paréntesis, el nombre de esta no será incluida en la URL, de manera
que esto permite organizar archivos en grupos lógicos sin afectar la URL.
En este caso se crea la carpeta (overview) para que loading.tsx solo se aplique a la página principal de la ruta /dashboard.
*/