// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::{Position, Size, WindowBuilder};

fn main() {
    tauri::Builder::default()
        // .setup(|app| {
        //     let window =
        //         WindowBuilder::new(app, "window", tauri::WindowUrl::App("index.html".into()))
        //             .build()?;
        //     let monitors = window.available_monitors()?;
        //     let monitor = monitors.get(0).ok_or(tauri::Error::CreateWindow)?;
        //     let monitor_position = monitor.position();
        //     let monitor_size = monitor.size();
        //     window.set_position(Position::Physical(tauri::PhysicalPosition {
        //         x: monitor_position.x,
        //         y: monitor_position.y,
        //     }))?;
        //     window.set_size(Size::Physical(tauri::PhysicalSize {
        //         width: monitor_size.width,
        //         height: monitor_size.height,
        //     }))?;
        //     window.set_always_on_top(true)?;
        //     window.set_decorations(false)?;
        //     window.set_skip_taskbar(true)?;
        //     window.set_ignore_cursor_events(true)?;
        //     Ok(())
        // })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
