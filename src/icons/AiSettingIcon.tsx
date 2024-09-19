import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiSettingIcon({ iconName = 'ai-setting-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
