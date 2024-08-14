from pynput import keyboard


def keyboard_start():
    with keyboard.Listener(on_press=keyboard_log) as lstn:
        lstn.join()


def keyboard_log(key):
    print(key)

keyboard_start()