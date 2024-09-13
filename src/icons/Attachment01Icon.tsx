import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Attachment01Icon({
  iconName = 'attachment-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
