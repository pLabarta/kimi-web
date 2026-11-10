# Kimi Web

Sitio estático hecho con [Zola](https://www.getzola.org/).

## Requisitos

Zola `0.23.3` (la misma versión que usa Netlify, ver `netlify.toml`).

### Instalar Zola en Linux

**Opción 1: binario oficial (cualquier distro)**

```sh
curl -L -o zola.tar.gz https://github.com/getzola/zola/releases/download/v0.23.3/zola-v0.23.3-x86_64-unknown-linux-gnu.tar.gz
tar -xzf zola.tar.gz
sudo mv zola /usr/local/bin/
rm zola.tar.gz
```

Si no tenés `sudo`, mové el binario a una carpeta de tu `PATH`, por ejemplo `~/.local/bin/`.

**Opción 2: gestor de paquetes**

```sh
# Arch Linux
sudo pacman -S zola

# Snap
sudo snap install zola --edge

# Nix
nix-env -iA nixpkgs.zola

# Homebrew
brew install zola
```

Estas opciones pueden instalar una versión distinta de la `0.23.3`.

Verificá la instalación:

```sh
zola --version
```

## Correr el sitio en local

Desde la carpeta del proyecto:

```sh
zola serve
```

Después abrí <http://127.0.0.1:1111> en el navegador. El sitio se recarga solo cuando cambiás plantillas, estilos (`sass/`) o contenido (`content/`).

Si cambiás algo y no se ve reflejado, frená el servidor con `Ctrl+C`, volvé a correr `zola serve` y recargá el navegador con `Ctrl+Shift+R`.

## Generar el sitio

```sh
zola build
```

El resultado queda en la carpeta `public/`.

## Estructura

| Carpeta | Contenido |
|---|---|
| `content/` | Secciones y artículos (`id`, `pm`, `av`) |
| `templates/` | Plantillas HTML y partials |
| `sass/` | Estilos |
| `static/` | Imágenes y JavaScript |
| `data/skills.json` | Lista de skills y sus áreas |

## Deploy

El sitio se publica en Netlify. La configuración está en `netlify.toml`.
