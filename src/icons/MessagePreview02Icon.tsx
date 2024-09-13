import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MessagePreview02Icon({
  iconName = 'message-preview-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
