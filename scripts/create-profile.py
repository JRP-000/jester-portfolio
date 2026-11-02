"""Build the public professional profile from the repository's verified CV facts."""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT

root = Path(__file__).resolve().parent.parent
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameJP', fontName='Helvetica-Bold', fontSize=28, leading=32, textColor=HexColor('#153d24'), spaceAfter=7))
styles.add(ParagraphStyle(name='RoleJP', fontName='Helvetica', fontSize=11, leading=16, textColor=HexColor('#345b40'), spaceAfter=10))
styles.add(ParagraphStyle(name='SectionJP', fontName='Helvetica-Bold', fontSize=11, leading=15, textColor=HexColor('#153d24'), spaceBefore=17, spaceAfter=7))
styles.add(ParagraphStyle(name='BodyJP', fontName='Helvetica', fontSize=9.5, leading=14, textColor=HexColor('#24382b'), spaceAfter=6))
styles.add(ParagraphStyle(name='SmallJP', fontName='Helvetica', fontSize=8.5, leading=12, textColor=HexColor('#46624e'), spaceAfter=6))
items=[]
def p(text, style='BodyJP'): items.append(Paragraph(text, styles[style]))
p('Jester Pedrosa', 'NameJP')
p('WEB DEVELOPMENT / QUALITY ASSURANCE / IT SUPPORT', 'RoleJP')
p('<link href="mailto:pedrosajester28@gmail.com">pedrosajester28@gmail.com</link>  |  <link href="https://jester-portfolio.vercel.app">jester-portfolio.vercel.app</link>', 'SmallJP')
p('<link href="https://github.com/JRP-000">github.com/JRP-000</link>', 'SmallJP')
p('Professional profile', 'SectionJP')
p('Web developer with experience in quality assurance and IT support. Open to freelance project discussions involving responsive websites, content systems, software testing, and technical troubleshooting.')
p('Experience', 'SectionJP')
p('<b>IOL Inc. - IT Support Specialist / QA Engineer</b><br/>October 2020 - present')
p('Manual testing and user acceptance testing against technical specifications. Enterprise software troubleshooting, translation of client feedback into requirements, and preparation of bug reports, test logs, and user documentation.')
p('Selected project contributions', 'SectionJP')
p('<b>BaxterIP - Developer / IT Support</b><br/>Managed Sanity.io content architecture and deployment; resolved functional bugs affecting cross-browser compatibility and consistent rendering.')
p('<b>CyberMeds - QA Engineer / IT Support</b><br/>Functional and regression testing of an e-commerce application, including data integrity, transaction flows, and checkout usability.')
p('<b>ZIGMAFY / Advanced Robust Cooperative System - QA Engineer / IT Support</b><br/>Platform testing, system validation, stakeholder feedback, technical documentation, and user training.')
p('<b>IRIS-BOT - QA Tester</b><br/>Tested n8n and Telegram API document-retrieval workflows, response accuracy, user-command edge cases, and workflow failures.')
p('Technical toolkit', 'SectionJP')
p('Next.js, React, TypeScript, HTML &amp; CSS, GSAP, Sanity.io, manual testing, regression testing, UAT, n8n workflow testing, Telegram API, and technical documentation. Portfolio implementation includes metadata, sitemaps, and structured data.')
p('Education', 'SectionJP')
p('<b>Bachelor of Science in Computer Engineering</b><br/>Lorma Colleges - August 2020')
p('Project discussions', 'SectionJP')
p('Share your goal, existing website or design files, expected scope, timeline, and budget range. Detailed project examples and contact options are available on the portfolio.')

def footer(canvas, doc):
    canvas.setStrokeColor(HexColor('#bad2c1')); canvas.line(44, 39, 551, 39)
    canvas.setFont('Helvetica',8); canvas.setFillColor(HexColor('#46624e'))
    canvas.drawString(44, 26, 'Jester Pedrosa | Public professional profile')
    canvas.drawRightString(551, 26, str(doc.page))

target=root/'public/downloads/jester-pedrosa-profile.pdf'
SimpleDocTemplate(str(target), pagesize=(595.28,841.89), rightMargin=44,leftMargin=44,topMargin=40,bottomMargin=53,title='Jester Pedrosa - Professional Profile',author='Jester Pedrosa').build(items,onFirstPage=footer,onLaterPages=footer)
print(target)
