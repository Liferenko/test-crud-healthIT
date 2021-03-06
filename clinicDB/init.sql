PGDMP                     	    x            tiny-cliniq     12.3 (Ubuntu 12.3-1.pgdg19.10+1)     12.3 (Ubuntu 12.3-1.pgdg19.10+1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    347394    tiny-cliniq    DATABASE        CREATE DATABASE "tiny-cliniq" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE "tiny-cliniq";
                postgres    false            �           0    0    DATABASE "tiny-cliniq"    ACL     0   GRANT ALL ON DATABASE "tiny-cliniq" TO tinydev;
                   postgres    false    2956            �            1259    347397    patient    TABLE       CREATE TABLE public.patient (
    id integer NOT NULL,
    full_name character varying(255) NOT NULL,
    gender character varying(50) NOT NULL,
    birth_date date NOT NULL,
    address text,
    policy_number character varying(11) NOT NULL,
    verified boolean NOT NULL
);
    DROP TABLE public.patient;
       public         heap    postgres    false            �            1259    347395    patient_id_seq    SEQUENCE     �   CREATE SEQUENCE public.patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.patient_id_seq;
       public          postgres    false    203            �           0    0    patient_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.patient_id_seq OWNED BY public.patient.id;
          public          postgres    false    202                       2604    347400 
   patient id    DEFAULT     h   ALTER TABLE ONLY public.patient ALTER COLUMN id SET DEFAULT nextval('public.patient_id_seq'::regclass);
 9   ALTER TABLE public.patient ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �          0    347397    patient 
   TABLE DATA           f   COPY public.patient (id, full_name, gender, birth_date, address, policy_number, verified) FROM stdin;
    public          postgres    false    203   �       �           0    0    patient_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.patient_id_seq', 8, true);
          public          postgres    false    202                       2606    347405    patient patient_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.patient DROP CONSTRAINT patient_pkey;
       public            postgres    false    203                       2606    347407 !   patient patient_policy_number_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_policy_number_key UNIQUE (policy_number);
 K   ALTER TABLE ONLY public.patient DROP CONSTRAINT patient_policy_number_key;
       public            postgres    false    203            �   �   x�M��n� ������s<�U��C��v��B�^x�BTU޿��ޖ��e}����<���\��Gd�Y*$�_���b4��>H�p9�J.{HeK��[CR�;/��L3c���Zɴ~n)����r��@k����b��od��R�ӑ2E�~�
��F�5&����HN9<�OGö�n(��H=b3�!V�o9�v\R!:�m��B����0��M     