# writer
һ��MarkDown��д���ߣ������ļ��б���ʱԤ������ʷ�汾�������ĸ����ܣ���������Ϊhtml�ĵ���

#### �洢
�洢����sqlite��mysql�����ѡ��mysql�洢����Ҫ�Լ���schema��Ȼ�󽫴�schema��д��application.yml�ĵ��У�ѡ��sqlite�������κ��޸ģ�Ĭ��ѡ��sqlite��
**[ע��]��**���ݿ�洢���ݲ�δcode�������Ʊ���sqlite���ɵ�.db�ļ�

#### ��̬��Դ
��̬��Դ������resources/static�£����ֱ��ʹ��`java -jar writer.jar`�������У���ֱ�ӷ��ʵĻ���ô��һ���ϴ�ͼƬ�����޷��鿴����Ҫ������������tomcat��������
��Ҳ���԰�static���µ����ݷŵ�nginx��apache�£��Ͳ��������������ˡ�

#### ����
ǰ��������[����](https://www.jianshu.com)��js��css�����ֹ��ܱ��и���Ҫ����ԭ��ԭζ�ķ������ȥ[����](https://www.jianshu.com)

#### build
```
$ git clone https://github.com/wangguanquan/writer
$ cd writer
$ mvn clean package -DSkip.test=true
$ cd target
$ java -jar writer-1.0-SNAPSHOT.jar
```