class WebSocketService {
  private socket: WebSocket | null = null

  public connect(url: string) {
    this.socket = new WebSocket(url)
    this.socket.onopen = () => {
      console.log('Connected to WebSocket')
    }
  }

  public sendMessage(message: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message)
    }
  }

  public onMessage(callback: (message: string) => void) {
    if (this.socket) {
      this.socket.onmessage = event => {
        callback(event.data)
      }
    }
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close()
    }
  }
}

export default new WebSocketService()
