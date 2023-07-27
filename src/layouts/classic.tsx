import cn from 'classnames';

export default function ClassicLayout({
  children,
  contentClassName,
}: React.PropsWithChildren<{ contentClassName?: string }>) {
  return (
    <div className="rtl:xl:pr-24 rtl:2xl:pr-28">
      <main
        className={cn(
          'min-h-screen bg-indigo-50 px-4 pt-2 backdrop-blur sm:px-6 sm:pb-20 lg:px-12 xl:pb-6 3xl:px-56 3xl:pt-2.5',
          contentClassName
        )}
      >
        {children}
      </main>
    </div>
  );
}
