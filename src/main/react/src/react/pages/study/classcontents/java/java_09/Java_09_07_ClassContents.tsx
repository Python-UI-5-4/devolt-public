import { JSX, useEffect } from 'react';

import hljs from 'highlight.js';

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassContentsText,
  ClassContentsContainer,
  ClassContentsTitle3,
} from '../../../../../styles/study/Study_Class';
import 'highlight.js/styles/a11y-dark.css';

const Java_09_07_ClassContents = (): JSX.Element => {
  const Java_09_07_Code01 = (): JSX.Element => {
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
package 소켓시리얼서버;
import java.io.Serializable;

public class Employee implements Serializable {
    String name;
    String addr;
    String jumin;
    String phone;

    public Employee(String name, String addr, String jumin, String phone) {
        this.name = name;
        this.addr = addr;
        this.jumin = jumin;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getJumin() {
        return jumin;
    }

    public void setJumin(String jumin) {
        this.jumin = jumin;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_07_Code02 = (): JSX.Element => {
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
package 소켓시리얼서버;

import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketSerialServer {
    public static void main(String[] args) {
        ServerSocket serverSocket = null;
        try {
            serverSocket = new ServerSocket(5433);
            while(true) {
                System.out.println("서버 실행 중..");
                Socket socket = serverSocket.accept();
								// 소켓을 통해 바이트 스트림을 얻어 낸다.
                OutputStream outputStream = socket.getOutputStream();
								// 직렬화 수행 (객체를 바이트 스트림으로 변환)
                ObjectOutputStream oos = new ObjectOutputStream(outputStream);
                Employee emp = new Employee("우영우", "서울시 강남구", "863312-1111111", "010-5006-1234");
                oos.writeObject(emp);
            }
        } catch(IOException e) {
            e.printStackTrace();
        }
    }
}
          `}
        </code>
      </pre>
    );
  };

  const Java_09_07_Code03 = (): JSX.Element => {
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
package 소켓시리얼클라이언트;
import 소켓시리얼서버.Employee;

import java.io.InputStream;
import java.io.ObjectInputStream;
import java.net.ConnectException;
import java.net.Socket;

public class SocketSerialClient {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 5433);
            InputStream inputStream = socket.getInputStream();
            ObjectInputStream ois = new ObjectInputStream(inputStream);
            Employee emp = (Employee) ois.readObject();
            System.out.println("이름 : " + emp.getName());
            System.out.println("주소 : " + emp.getAddr());
            System.out.println("주민번호 : " + emp.getJumin());
            System.out.println("전화번호 : " + emp.getPhone());
            ois.close();
            socket.close();
        } catch (ConnectException e) {
            System.out.println("연결실패 !!!!!");
        } catch (Exception e ) {
            e.printStackTrace();
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
          <ClassHeaderTitle>직렬화를 이용한 네트워크</ClassHeaderTitle>
        </ClassHeader>
        <ClassContentsContainer>
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>Employee</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            <Java_09_07_Code01 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>Server</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            - ObjectOutputStream : 파일이나 네트워크로 데이터를 전달하기 위해 직렬화를 수행합니다.
            <br />
            - writeObject()
            <Java_09_07_Code02 />
          </ClassContentsText>
          <br />
          <ClassContentsTitle3>
            <b style={{ color: 'var(--devolt-white)' }}>Client</b>
          </ClassContentsTitle3>
          <ClassContentsText>
            - ObjectInputStream : 역직렬화 수행(소켓으로 부터 바이트 스트림 얻어 역직렬화)
            <br />
            - readObject()
            <Java_09_07_Code03 />
          </ClassContentsText>
        </ClassContentsContainer>
      </EachClass>
    </>
  );
};

export default Java_09_07_ClassContents;
