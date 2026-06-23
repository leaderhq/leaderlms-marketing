const NAVY = '#06163E';
const GREEN = '#5CAC23';
const BLUE = '#1862EA';

interface Course {
  title: string;
  progress: number;
  lessons: number;
  done: number;
  badge?: string;
}

const COURSES: Course[] = [
  { title: 'Fast Start: Your First 30 Days', progress: 100, lessons: 8, done: 8, badge: '✓ Certified' },
  { title: 'Prospecting & Lead Capture', progress: 75, lessons: 12, done: 9 },
  { title: 'Objection Handling Masterclass', progress: 33, lessons: 9, done: 3 },
  { title: 'Building Your Downline', progress: 0, lessons: 10, done: 0 },
];

export function LmsCourseMock() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 340,
        maxWidth: '100%',
        background: '#f6f8fb',
        borderRadius: 18,
        boxShadow: '0 24px 64px rgba(6,22,62,0.18), 0 2px 8px rgba(6,22,62,0.08)',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ background: NAVY, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ width: 22, height: 3, borderRadius: 2, background: BLUE }} />
          <div style={{ width: 17, height: 3, borderRadius: 2, background: '#fff', marginLeft: 3 }} />
          <div style={{ width: 12, height: 3, borderRadius: 2, background: GREEN, marginLeft: 6 }} />
        </div>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: '-0.3px' }}>
          Leader<span style={{ color: GREEN }}>LMS</span>
        </span>
        <div style={{ flex: 1 }} />
        <div style={{
          padding: '2px 8px', borderRadius: 20, fontSize: 10, fontWeight: 700,
          background: `${GREEN}25`, color: GREEN, border: `1px solid ${GREEN}50`,
        }}>My Team</div>
      </div>

      {/* Progress summary */}
      <div style={{ padding: '12px 16px', background: '#fff', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: 16 }}>
        {[
          { label: 'Courses', value: '4' },
          { label: 'Completed', value: '1' },
          { label: 'Certified', value: '1' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: NAVY }}>{s.value}</div>
            <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Course list */}
      <div style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COURSES.map((course) => (
          <div key={course.title} style={{
            background: '#fff',
            borderRadius: 10,
            padding: '10px 12px',
            border: '1px solid #e5e7eb',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: NAVY, lineHeight: 1.3, maxWidth: 200 }}>{course.title}</div>
              {course.badge && (
                <div style={{
                  fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 20,
                  background: `${GREEN}20`, color: GREEN, border: `1px solid ${GREEN}40`, flexShrink: 0,
                }}>{course.badge}</div>
              )}
            </div>
            <div style={{ height: 4, borderRadius: 4, background: '#f3f4f6', overflow: 'hidden', marginBottom: 4 }}>
              <div style={{
                height: '100%', borderRadius: 4,
                width: `${course.progress}%`,
                background: course.progress === 100 ? GREEN : BLUE,
              }} />
            </div>
            <div style={{ fontSize: 10, color: '#9ca3af' }}>
              {course.done}/{course.lessons} lessons · {course.progress}%
            </div>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div style={{
        padding: '10px 14px',
        borderTop: '1px solid #e5e7eb',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: 11, color: '#6b7280' }}>Next up: <strong style={{ color: NAVY }}>Prospecting</strong></div>
        <div style={{
          padding: '6px 12px', borderRadius: 20,
          background: GREEN, color: '#fff',
          fontSize: 11, fontWeight: 700,
        }}>Continue →</div>
      </div>
    </div>
  );
}
