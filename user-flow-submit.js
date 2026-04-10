(function () {
  var SUPABASE_URL = "https://iyqfsgtawhkbvbkvrbsa.supabase.co";
  var SUPABASE_PUBLISHABLE_KEY = "sb_publishable_MJ58ehoCWPwvX1m836BOPA_AhZepXMQ";

  var FLOW_DEFINITIONS = {
    "super-admin": [
      {
        step_no: 1,
        step_title: "Autentikasi & Masuk Dashboard",
        action_instruction: "Silakan klik tombol Login pada kanan atas halaman Home, kemudian login dengan akun Super Admin dan pastikan masuk ke dashboard.",
        question_text: "Apakah alur autentikasi dan tampilan dashboard Super Admin sudah sesuai kebutuhan?"
      },
      {
        step_no: 2,
        step_title: "Manajemen User & Keanggotaan",
        action_instruction: "Silakan buka modul manajemen anggota/admin, lalu cek apakah data bisa dilihat dengan struktur yang jelas.",
        question_text: "Apakah fitur manajemen user dan keanggotaan sudah lengkap dan mudah dipahami?"
      },
      {
        step_no: 3,
        step_title: "Operasional Streaming",
        action_instruction: "Silakan uji alur jadwal streaming, registrasi misa besar, penugasan petugas, dan monitoring evaluasi.",
        question_text: "Apakah alur operasional streaming berjalan runtut dan informasinya jelas?"
      },
      {
        step_no: 4,
        step_title: "Inventaris & Peminjaman",
        action_instruction: "Silakan cek data inventaris, persetujuan peminjaman, serta riwayat pinjam-kembali.",
        question_text: "Apakah fitur inventaris dan peminjaman sudah mendukung kebutuhan operasional?"
      },
      {
        step_no: 5,
        step_title: "Informasi & Publikasi",
        action_instruction: "Silakan uji kelola profil, berita/pengumuman, serta agenda publik.",
        question_text: "Apakah modul informasi dan publikasi sudah sesuai untuk pengelolaan konten?"
      },
      {
        step_no: 6,
        step_title: "Konten Utama Website",
        action_instruction: "Silakan cek pengelolaan carousel, embed media, dan tampilan hasil pencarian.",
        question_text: "Apakah modul konten utama website sudah tampil konsisten dan siap digunakan?"
      },
      {
        step_no: 7,
        step_title: "Form Pendaftaran Kegiatan",
        action_instruction: "Silakan uji dari builder form hingga pengecekan daftar pendaftar.",
        question_text: "Apakah alur form pendaftaran kegiatan sudah lengkap dari hulu ke hilir?"
      },
      {
        step_no: 8,
        step_title: "Log Aktivitas & Penutupan Sesi",
        action_instruction: "Silakan uji halaman log aktivitas, lalu lakukan penutupan sesi pengujian.",
        question_text: "Apakah log aktivitas dan penutupan sesi sudah sesuai ekspektasi pengujian?"
      }
    ],
    "admin": [
      {
        step_no: 1,
        step_title: "Login & Dashboard Admin",
        action_instruction: "Silakan klik Login di kanan atas Home, masuk sebagai Admin, lalu verifikasi tampilan dashboard.",
        question_text: "Apakah proses login dan tampilan dashboard Admin sudah sesuai?"
      },
      {
        step_no: 2,
        step_title: "Modul Streaming",
        action_instruction: "Silakan uji jadwal streaming, registrasi misa besar, penugasan, dan monitoring evaluasi.",
        question_text: "Apakah modul streaming untuk Admin berjalan baik dan jelas?"
      },
      {
        step_no: 3,
        step_title: "Inventaris & Peminjaman",
        action_instruction: "Silakan lakukan pengecekan alur inventaris, approval, dan riwayat peminjaman.",
        question_text: "Apakah alur inventaris dan peminjaman untuk Admin sudah memadai?"
      },
      {
        step_no: 4,
        step_title: "Publikasi & Konten Website",
        action_instruction: "Silakan cek pengelolaan profil, berita, agenda, dan konten utama website.",
        question_text: "Apakah fitur publikasi dan konten website sudah mudah digunakan?"
      },
      {
        step_no: 5,
        step_title: "Keanggotaan & Form Kegiatan",
        action_instruction: "Silakan uji manajemen anggota, sertifikat, builder form, dan daftar pendaftar.",
        question_text: "Apakah fitur keanggotaan dan form kegiatan sudah sesuai alur kerja Admin?"
      },
      {
        step_no: 6,
        step_title: "Log Aktivitas, Laporan, Logout",
        action_instruction: "Silakan uji log aktivitas Admin, lalu lakukan logout untuk menutup sesi.",
        question_text: "Apakah log aktivitas dan alur logout Admin sudah berjalan dengan baik?"
      }
    ],
    "anggota": [
      {
        step_no: 1,
        step_title: "Masuk Sistem Anggota",
        action_instruction: "Silakan klik Login dari Home, masuk dengan akun Anggota, lalu cek dashboard anggota.",
        question_text: "Apakah proses masuk sistem anggota sudah jelas dan mudah?"
      },
      {
        step_no: 2,
        step_title: "Profil, Sertifikat, dan Log Pribadi",
        action_instruction: "Silakan cek profil, unduh sertifikat, dan buka log aktivitas pribadi.",
        question_text: "Apakah fitur identitas anggota sudah sesuai kebutuhan pengujian?"
      },
      {
        step_no: 3,
        step_title: "Flow Tugas Streaming Anggota",
        action_instruction: "Silakan uji alur dari lihat jadwal, request tugas, pembatalan/tukar jadwal, hingga evaluasi.",
        question_text: "Apakah alur tugas streaming anggota sudah runtut dan mudah diikuti?"
      },
      {
        step_no: 4,
        step_title: "Monitoring Kewajiban Tugas",
        action_instruction: "Silakan buka monitoring kewajiban dan cek status kewajiban tugas pribadi.",
        question_text: "Apakah monitoring kewajiban tugas sudah informatif untuk anggota?"
      },
      {
        step_no: 5,
        step_title: "Flow Peminjaman Barang",
        action_instruction: "Silakan uji alur pengajuan pinjam, pengambilan, pengembalian, dan riwayat peminjaman.",
        question_text: "Apakah alur peminjaman barang anggota sudah jelas dari awal sampai akhir?"
      },
      {
        step_no: 6,
        step_title: "Form Pendaftaran Kegiatan + Notifikasi",
        action_instruction: "Silakan cek daftar form kegiatan, isi form detail, lalu uji panel notifikasi di header.",
        question_text: "Apakah alur form pendaftaran dan notifikasi anggota sudah berjalan baik?"
      },
      {
        step_no: 7,
        step_title: "Selesai Pengujian Anggota",
        action_instruction: "Silakan validasi alur kembali ke Home dan lakukan logout.",
        question_text: "Apakah alur penutupan sesi anggota sudah sesuai harapan?"
      }
    ]
  };

  function headers() {
    return {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: "Bearer " + SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json"
    };
  }

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function byId(id) {
    return document.getElementById(id);
  }

  async function requestJson(method, path, body) {
    var options = {
      method: method,
      headers: headers()
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    var response = await fetch(SUPABASE_URL + path, options);
    var text = await response.text();
    var data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      throw new Error((data && (data.message || data.error_description || data.error)) || "Request gagal");
    }

    return data;
  }

  async function ensureFlow(slug) {
    var rows = await requestJson("GET", "/rest/v1/uf_flows?select=id,slug&slug=eq." + encodeURIComponent(slug));
    if (!rows || !rows.length) {
      throw new Error("Flow tidak ditemukan di database: " + slug);
    }
    return rows[0];
  }

  async function ensureStepsAndQuestions(flowId, defs) {
    var existingSteps = await requestJson(
      "GET",
      "/rest/v1/uf_steps?select=id,flow_id,step_no,step_title&flow_id=eq." + flowId + "&order=step_no.asc"
    );

    var byStepNo = {};
    (existingSteps || []).forEach(function (row) {
      byStepNo[row.step_no] = row;
    });

    for (var i = 0; i < defs.length; i += 1) {
      var item = defs[i];
      if (!byStepNo[item.step_no]) {
        var inserted = await requestJson("POST", "/rest/v1/uf_steps", {
          flow_id: flowId,
          step_no: item.step_no,
          step_title: item.step_title,
          action_instruction: item.action_instruction,
          page_url: window.location.pathname.split("/").pop()
        });

        if (inserted && inserted.length) {
          byStepNo[item.step_no] = inserted[0];
        }
      }
    }

    existingSteps = await requestJson(
      "GET",
      "/rest/v1/uf_steps?select=id,flow_id,step_no,step_title&flow_id=eq." + flowId + "&order=step_no.asc"
    );

    var stepIds = existingSteps.map(function (row) {
      return row.id;
    });

    var qMap = {};
    if (stepIds.length) {
      var inFilter = stepIds.join(",");
      var questions = await requestJson(
        "GET",
        "/rest/v1/uf_questions?select=id,step_id,question_no,question_text&step_id=in.(" + inFilter + ")"
      );

      (questions || []).forEach(function (q) {
        qMap[q.step_id] = q;
      });

      for (var j = 0; j < defs.length; j += 1) {
        var step = existingSteps.find(function (row) {
          return row.step_no === defs[j].step_no;
        });

        if (step && !qMap[step.id]) {
          var insertedQuestion = await requestJson("POST", "/rest/v1/uf_questions", {
            step_id: step.id,
            question_no: 1,
            question_text: defs[j].question_text,
            answer_type: "yes_no_note"
          });

          if (insertedQuestion && insertedQuestion.length) {
            qMap[step.id] = insertedQuestion[0];
          }
        }
      }
    }

    return {
      steps: existingSteps,
      questionByStepId: qMap
    };
  }

  function buildQuestionnaire(defs) {
    var container = byId("ufQuestionList");
    if (!container) {
      return;
    }

    container.innerHTML = defs.map(function (item) {
      return (
        '<article class="uf-q-item" data-step-no="' + item.step_no + '">' +
          '<header><strong>Step ' + item.step_no + " - " + escapeHtml(item.step_title) + '</strong></header>' +
          '<p class="uf-action">' + escapeHtml(item.action_instruction) + '</p>' +
          '<p class="uf-question">Pertanyaan: ' + escapeHtml(item.question_text) + '</p>' +
          '<div class="uf-answer-row">' +
            '<label><input type="radio" name="answer-' + item.step_no + '" value="YA"> YA</label>' +
            '<label><input type="radio" name="answer-' + item.step_no + '" value="TIDAK"> TIDAK</label>' +
          '</div>' +
          '<label class="uf-label">Catatan pertanyaan</label>' +
          '<textarea id="note-' + item.step_no + '" rows="2" placeholder="Catatan terkait jawaban pertanyaan..."></textarea>' +
          '<label class="uf-label">Catatan pendapat user per step</label>' +
          '<textarea id="opinion-' + item.step_no + '" rows="2" placeholder="Pendapat user setelah menguji step ini..."></textarea>' +
        '</article>'
      );
    }).join("");
  }

  function selectedValue(stepNo) {
    var checked = document.querySelector('input[name="answer-' + stepNo + '"]:checked');
    return checked ? checked.value : "";
  }

  function renderMessage(type, text) {
    var el = byId("ufSubmitInfo");
    if (!el) {
      return;
    }

    el.className = "uf-submit-info " + type;
    el.textContent = text;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    var root = byId("ufQuestionnaire");
    var flowSlug = root ? root.getAttribute("data-flow-slug") : "";
    var defs = FLOW_DEFINITIONS[flowSlug] || [];

    var fullName = String(byId("testerFullName").value || "").trim();
    if (!fullName) {
      renderMessage("error", "Nama lengkap penguji wajib diisi.");
      return;
    }

    var submitButton = byId("ufSubmitBtn");
    submitButton.disabled = true;
    renderMessage("loading", "Sedang menyimpan hasil pengujian...");

    try {
      var flow = await ensureFlow(flowSlug);
      var mapping = await ensureStepsAndQuestions(flow.id, defs);

      var answers = [];
      var stepNotes = [];

      defs.forEach(function (def) {
        var step = (mapping.steps || []).find(function (s) {
          return s.step_no === def.step_no;
        });
        if (!step) {
          return;
        }

        var question = mapping.questionByStepId[step.id];
        var answerValue = selectedValue(def.step_no);
        var noteText = String((byId("note-" + def.step_no) || {}).value || "").trim();
        var opinionText = String((byId("opinion-" + def.step_no) || {}).value || "").trim();

        if (question) {
          answers.push({
            step_id: step.id,
            question_id: question.id,
            answer_value: answerValue,
            note_text: noteText
          });
        }

        if (opinionText) {
          stepNotes.push({
            step_id: step.id,
            user_opinion: opinionText
          });
        }
      });

      var payload = {
        payload: {
          flow_slug: flowSlug,
          tester: {
            full_name: fullName,
            org: String(byId("testerOrg").value || "").trim(),
            email: String(byId("testerEmail").value || "").trim(),
            phone: String(byId("testerPhone").value || "").trim()
          },
          answers: answers,
          step_notes: stepNotes
        }
      };

      var submissionId = await requestJson("POST", "/rest/v1/rpc/uf_submit_full", payload);
      renderMessage("success", "Submit berhasil. ID submission: " + submissionId);
      byId("ufForm").reset();
    } catch (error) {
      renderMessage("error", "Submit gagal: " + error.message);
    } finally {
      submitButton.disabled = false;
    }
  }

  function injectStyles() {
    if (document.getElementById("ufRuntimeStyles")) {
      return;
    }

    var style = document.createElement("style");
    style.id = "ufRuntimeStyles";
    style.textContent = [
      ".uf-form { display:grid; gap:10px; padding:12px; }",
      ".uf-grid { display:grid; grid-template-columns:repeat(2,minmax(220px,1fr)); gap:8px; }",
      ".uf-grid input { width:100%; border:1px solid #b9c2d1; border-radius:8px; padding:8px; font:inherit; font-size:0.82rem; }",
      ".uf-question-list { display:grid; gap:10px; }",
      ".uf-q-item { border:1px solid #cbd5e1; border-radius:10px; background:#ffffff; padding:10px; display:grid; gap:6px; }",
      ".uf-action,.uf-question { margin:0; font-size:0.78rem; color:#334155; line-height:1.45; }",
      ".uf-answer-row { display:flex; gap:14px; flex-wrap:wrap; font-size:0.78rem; color:#1f2937; }",
      ".uf-label { font-size:0.75rem; font-weight:700; color:#374151; }",
      ".uf-q-item textarea { width:100%; border:1px solid #b9c2d1; border-radius:8px; padding:8px; font:inherit; font-size:0.8rem; resize:vertical; }",
      ".uf-submit-row { display:flex; gap:8px; flex-wrap:wrap; align-items:center; }",
      ".uf-btn { border:0; border-radius:8px; background:#1d4ed8; color:#fff; font-weight:700; padding:8px 12px; cursor:pointer; }",
      ".uf-btn.link { text-decoration:none; border:1px solid #94a3b8; background:#fff; color:#1f2937; }",
      ".uf-submit-info { font-size:0.78rem; padding:7px 9px; border-radius:8px; }",
      ".uf-submit-info.loading { background:#eff6ff; color:#1e3a8a; border:1px solid #bfdbfe; }",
      ".uf-submit-info.success { background:#ecfdf5; color:#065f46; border:1px solid #a7f3d0; }",
      ".uf-submit-info.error { background:#fef2f2; color:#991b1b; border:1px solid #fecaca; }",
      "@media (max-width:900px){ .uf-grid{ grid-template-columns:1fr; } }"
    ].join("");
    document.head.appendChild(style);
  }

  function init() {
    var section = byId("ufQuestionnaire");
    if (!section) {
      return;
    }

    injectStyles();

    var flowSlug = section.getAttribute("data-flow-slug");
    var defs = FLOW_DEFINITIONS[flowSlug] || [];
    buildQuestionnaire(defs);
    byId("ufForm").addEventListener("submit", handleSubmit);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
