import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsTitle1,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle3,
  ClassContentsImage,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_09_04_ClassContents = (): JSX.Element => {
  const Java_09_04_Code01 = (): JSX.Element => {
    useEffect(() => {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        // Element를 HTMLElement로 타입 단언
        const element = block as HTMLElement;
        // 이미 하이라이팅된 요소인지 확인
        if (!element.dataset.highlighted) {
          hljs.highlightElement(element); // 하이라이팅
          element.dataset.highlighted = 'true'; // 하이라이팅 후 데이터 속성 추가
        }
      });
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 소켓서버;

import java.io.DataInputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.SocketException;

public class ReceiveThread extends Thread {
    private final Socket socket;

    public ReceiveThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            DataInputStream tmpbuf = new DataInputStream(socket.getInputStream());
            String receiveString;
            while (true) {
                receiveString = tmpbuf.readUTF();
                System.out.println("상대방 : " + receiveString);
            }
        } catch (SocketException e1) {
            System.out.println("상대방 연결이 종료되었습니다.");
        } catch (IOException e2) {
            e2.printStackTrace();
        }
    }

}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_04_Code02 = (): JSX.Element => {
    useEffect(() => {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        // Element를 HTMLElement로 타입 단언
        const element = block as HTMLElement;
        // 이미 하이라이팅된 요소인지 확인
        if (!element.dataset.highlighted) {
          hljs.highlightElement(element); // 하이라이팅
          element.dataset.highlighted = 'true'; // 하이라이팅 후 데이터 속성 추가
        }
      });
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 소켓서버;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.Scanner;

public class SendThread extends Thread {
    private final Socket socket;
    private Scanner scanner = new Scanner(System.in);

    public SendThread(Socket socket) {
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            DataOutputStream sendWriter = new DataOutputStream(socket.getOutputStream());
            String sendString;
            while(true){
                sendString = scanner.nextLine();
                sendWriter.writeUTF(sendString);
                sendWriter.flush();
            }
        }catch (IOException e){
            e.printStackTrace();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_04_Code03 = (): JSX.Element => {
    useEffect(() => {
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        // Element를 HTMLElement로 타입 단언
        const element = block as HTMLElement;
        // 이미 하이라이팅된 요소인지 확인
        if (!element.dataset.highlighted) {
          hljs.highlightElement(element); // 하이라이팅
          element.dataset.highlighted = 'true'; // 하이라이팅 후 데이터 속성 추가
        }
      });
    }, []);
    return (
      <pre>
        <code className="language-java">
          {`
package 소켓서버;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketServer {
    public static void main(String[] args) throws IOException {
        int port = 8888;
        ServerSocket socketServer = new ServerSocket(port);
        while(true) {
            Socket sock = socketServer.accept();
            System.out.println("ip : " + sock.getInetAddress() + " 와 연결되었습니다.");
            ReceiveThread receiveThread = new ReceiveThread(sock);
            receiveThread.start();
            SendThread sendThead = new SendThread(sock);
            sendThead.start();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };
  return (
    <>
      <EachClass>
        <ClassHeader>
          <ClassHeaderTitle>Server (단일 채팅 서버)</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle1>서버용 TCP 소켓 프로그래밍 순서</ClassContentsTitle1>
          <ClassContentsText>
            1. 서버의 포트 번호를 정함
            <br />
            2. 서버용 소켓 객체 생성 (ServerSocket)
            <br />
            3. 클라이언트 쪽에서 접속 요청이 오길 기다림 (accept)
            <br />
            4. 접속 요청이 오면 요청 수락 후 해당 클라이언트에 대한 소켓 객체 생성
            <br />
            5. 연결된 클라이언트와 입출력 스트림 생성
            <br />
            6. 스트림을 통해 읽고 쓰기
            <br />
            7. 통신 종료
          </ClassContentsText>
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>ReceiveThread</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            클라이언트에서 온 데이터를 수신하는 스레드이다.
            <br />
            마찬가지로 별도의 Thread를 만들기위해 Thread클래스를 상속받아 run()메서드를 구현한다.
            <br />
            socket.getIntputStream()을 사용해서 클라이언트에게 데이터를 수신할 수 있다.
            <Java_09_04_Code01 />
          </ClassContentsText>
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>SendThread</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            서버에서 클라이언트로 데이터를 전송하는 스레드이다.
            <br />
            별도의 Thread를 만들기위해 Thread클래스를 상속받아 run()메서드를 구현한다.
            <br />
            socket.getOutputStream()을 사용해서 클라이언트에게 데이터를 전송할 수 있다.
            <Java_09_04_Code02 />
          </ClassContentsText>
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>SocketServer</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            클라이언트의 연결 요청을 기다리면서 연결 수락을 담당하는 클래스
            <ClassContentsImage
              style={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(${'/images/study/java/java_09_04_01.png'})`,
              }}
            />
            <Java_09_04_Code03 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_09_04_ClassContents;
