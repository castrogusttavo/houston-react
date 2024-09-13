import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MailReply01Icon({
  iconName = 'mail-reply-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
